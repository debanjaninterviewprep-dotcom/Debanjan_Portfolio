import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In GitHub Actions, VITE_BASE is set to '/<repo-name>/' so that asset URLs
// resolve correctly at https://<user>.github.io/<repo>/.
// Locally (no env var), './' produces a portable build that also works
// when opened directly or served from any subpath.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || './',
});
