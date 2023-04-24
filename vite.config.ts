/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { resolve } from 'path';

export const entry = 'entry';
export const assets = 'assets';

export const pathResolver = (pathStr: string) => {
  return resolve(__dirname, '.', pathStr);
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolver('./src'),
    },
  },
  plugins: [react(), eslint()],
  build: {
    rollupOptions: {
      input: {
        [entry]: pathResolver('./src/entry-client.tsx'),
      },
      output: {
        entryFileNames: `${assets}/[name].js`,
        chunkFileNames: `${assets}/[name].js`,
        assetFileNames: `${assets}/[name].[ext]`,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      all: true,
      provider: 'istanbul',
      reporter: ['text'],
    },
  },
});
