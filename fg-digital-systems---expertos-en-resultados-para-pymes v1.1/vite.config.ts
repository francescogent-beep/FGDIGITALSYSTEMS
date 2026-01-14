import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
  // Fix: Removed invalid 'server.historyApiFallback' property.
  // Vite handles SPA routing by default in development, and this property is not part of the 'ServerOptions' type.
});