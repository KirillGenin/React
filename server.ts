import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

async function createAppServer() {
  const app = express();

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  app.use('/assets', express.static(path.resolve(__dirname, './src/assets')));

  app.use(async (req, res, next) => {
    const url = req.originalUrl;

    let html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

    html = await vite.transformIndexHtml(url, html);

    const parts = html.split('<!--ssr-outlet-->');

    try {

      res.write(parts[0]);

      const { renderApp } = await vite.ssrLoadModule('./src/entry-server.tsx');

      const stream = await renderApp(url, {
        onShellReady() {
          stream.pipe(res);
        },
        onShellError() {
          // do error handling
        },
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
        onError(err: Error) {
          console.error(err);
        },
      });
    } catch (e) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    }
  });

  return { app };
}

createAppServer().then(({ app }) => {
  const PORT = process.env.PORT || 3001;
  app.listen(Number(PORT), () => {
    console.log(`App is listening on http://localhost:${PORT}`);
  });
});
