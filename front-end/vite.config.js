import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 80,
    proxy: {
      '/carros': {
        target: 'http://18.222.23.155:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/carros/, ''),
      },
    },
  },
});
