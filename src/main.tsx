import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TeamsProvider } from './context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TeamsProvider>
      <App />
    </TeamsProvider>
  </React.StrictMode>
)
