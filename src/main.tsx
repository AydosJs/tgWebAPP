import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import './index.css'


import { Telegram } from "@twa-dev/types"
import { BrowserRouter } from 'react-router-dom';

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <WebAppProvider>
        <App />
      </WebAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
