import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [react(), libInjectCss()],

  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'LookmixDesignSystem',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
    },
  },
});
