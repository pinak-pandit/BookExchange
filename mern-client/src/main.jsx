import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import './index.css'
import App from './App'
import router from './routers/router.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
