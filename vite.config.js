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
      // no special config needed
    }
  },
  // this is the important part 👇
  optimizeDeps: {},
  preview: {
    // fallback to index.html for SPA routes
    // (so refreshing /textos/texto1 works)
    headers: {
      'Cache-Control': 'no-store'
    }
  }
});
