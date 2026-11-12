import path from 'path'
import fs from 'fs'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

const makeStandaloneFilePlugin = () => ({
  name: 'make-standalone-file',
  closeBundle() {
    const distHtmlPath = path.resolve(import.meta.dirname, 'dist/index.html')
    const rootStandalonePath = path.resolve(import.meta.dirname, '소개웹페이지.html')
    if (fs.existsSync(distHtmlPath)) {
      let content = fs.readFileSync(distHtmlPath, 'utf-8')
      
      // Remove type="module" and crossorigin safely without corrupting $ in minified JS
      content = content.replace(/<script\s+type="module"\s+crossorigin>/g, () => '<script>')
      content = content.replace(/<script\s+defer>/g, () => '<script>')

      // If the script is somehow inside <head>, move it safely
      const scriptStartIdx = content.indexOf('<script>')
      const scriptEndIdx = content.indexOf('</script>')

      if (scriptStartIdx !== -1 && scriptEndIdx !== -1 && scriptStartIdx < content.indexOf('id="root"')) {
        const scriptTag = content.substring(scriptStartIdx, scriptEndIdx + 9)
        // Remove script from head
        content = content.substring(0, scriptStartIdx) + content.substring(scriptEndIdx + 9)
        // Insert right before </body> using slice, NEVER string.replace() with $ in string!
        const newBodyCloseIdx = content.lastIndexOf('</body>')
        content = content.substring(0, newBodyCloseIdx) + scriptTag + '\n' + content.substring(newBodyCloseIdx)
      }

      fs.writeFileSync(distHtmlPath, content, 'utf-8')
      fs.writeFileSync(rootStandalonePath, content, 'utf-8')
      console.log('Successfully generated standalone HTML files without corruption!')
    }
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile(), makeStandaloneFilePlugin()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        format: 'iife',
        name: 'AppBundle',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
