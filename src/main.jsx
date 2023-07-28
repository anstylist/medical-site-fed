import React from 'react'
import ReactDOM from 'react-dom/client'
import DoctorDetails from './components/DoctorDetails/DoctorDetails'
import './styles/index.scss'
import App from './pages/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DoctorDetails />
  </React.StrictMode>
)
