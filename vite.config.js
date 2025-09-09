import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  base: '/474/',
  server: {
    fs: {
      allow: ['.']
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          prism: ["prismjs"],
          panzoom: ["@panzoom/panzoom"],
        },
      },
    },
  },
  optimizeDeps: {},
  preview: {
    // fallback to index.html for SPA routes
    // (so refreshing /textos/texto1 works)
    headers: {
      'Cache-Control': 'no-store'
    }
  }
});
