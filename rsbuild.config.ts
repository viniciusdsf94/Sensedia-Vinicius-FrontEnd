import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    favicon: './src/assets/sensedia-favicon.svg',
    title: 'Sensedia & Vinícius | FrontEnd Test',
  },
});





