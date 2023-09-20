import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Configure esbuild loader for JSX files
  esbuild: {
    loader: {
        '.js': 'jsx', // Use 'jsx' loader for .js files with JSX syntax
      },
    },

  // // Exclude specific packages from being bundled
  // optimizeDeps: {
  //   exclude: ['mock-aws-s3'],
  // },

  resolve: {
    fallback: {
      fs: false, // Disable 'fs' polyfill
      path: false, // Disable 'path' polyfill
    },
  }
})
