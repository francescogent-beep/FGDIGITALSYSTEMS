
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
  },
  // Fix: Removed historyApiFallback as it is not a valid property in Vite's ServerOptions or PreviewOptions.
  // Vite handles SPA fallback to index.html automatically when appType is 'spa' (the default).
  server: {
    // historyApiFallback: true, // Removed
  },
  preview: {
    // historyApiFallback: true, // Removed
  }
});
