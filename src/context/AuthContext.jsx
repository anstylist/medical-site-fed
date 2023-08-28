import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    fullName: localStorage.getItem('fullName') || '',
    email: localStorage.getItem('email') || '',
    status: localStorage.getItem('status') || '',
    token: localStorage.getItem('token') || '',
    role: localStorage.getItem('role') || []
  })

  const updateAuthData = ({ fullName = '', email = '', status = '', token = '', roles = [] } = {}) => {
    setAuthData({
      fullName,
      email,
      status,
      token,
      roles
    })

    localStorage.setItem('fullName', fullName)
    localStorage.setItem('email', email)
    localStorage.setItem('status', status)
    localStorage.setItem('token', token)
    localStorage.setItem('role', roles)
  }

  return (
    <AuthContext.Provider
      value={{ authData, updateAuthData, setAuthData }}
    >
      {children}
    </AuthContext.Provider>
  )
}
