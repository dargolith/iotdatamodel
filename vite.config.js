import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.mjs',
      name: 'iotdm',
      formats: ['es', 'cjs'],
      fileName: (format) => `iotdm.${format}.js`,
    },
    rollupOptions: {
      external: [],
    },
  },
});
