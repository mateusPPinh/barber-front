import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalCSS from './css/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalCSS />
    <ToastContainer />
    <App />
  </React.StrictMode>
)
