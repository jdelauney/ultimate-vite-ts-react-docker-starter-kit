import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { UserConfig } from 'vitest/config';

const test = {
  globals: true,
  environment: 'jsdom',
  threads: false,
  watch: false,
  reporter: 'verbose',
} as UserConfig['test'];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
  build: {
    minify: false,
  },
  base: './',
  root: '',
  test,
});
