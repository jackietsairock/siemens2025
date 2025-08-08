// @ts-check
import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],

  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      port: 5173,
      allowedHosts: ['2cc0d0417a48.ngrok-free.app'],
      hmr: {
        host: '2cc0d0417a48.ngrok-free.app',
        protocol: 'wss',
        clientPort: 443
      }
    }
  },
  
});