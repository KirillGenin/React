import { defineConfig } from 'vite';
import { assets } from './vite.config';
import baseConfig, { pathResolver } from './vite.config';

// https://vitejs.dev/config/
export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'dist/server',
    ssr: pathResolver('./src/entry-server.tsx'),
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `${assets}/[name].js`,
        assetFileNames: `${assets}/[name].[ext]`,
      },
    },
  },
});
