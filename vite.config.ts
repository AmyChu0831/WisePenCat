import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 部署在 /<仓库名>/ 子路径下，构建时通过 VITE_BASE 注入 base，本地开发保持根路径
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
})
