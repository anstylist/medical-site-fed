import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import { AuthProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </React.StrictMode>
)
