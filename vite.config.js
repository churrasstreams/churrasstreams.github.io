import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/churrasstreams.github.io/', // substitui por o nome do teu repositório do GitHub
  plugins: [react()],
});
