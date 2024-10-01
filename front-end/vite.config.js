import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Certifique-se de que o build vai gerar os arquivos na pasta 'dist'
  },
});
