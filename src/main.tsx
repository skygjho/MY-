import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

function initApp() {
  const rootElement = document.getElementById('root')
  if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  } else {
    // DOM이 아직 준비되지 않은 경우 대기
    window.addEventListener('DOMContentLoaded', () => {
      const el = document.getElementById('root')
      if (el) {
        createRoot(el).render(
          <StrictMode>
            <App />
          </StrictMode>,
        )
      }
    })
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}
