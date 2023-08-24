import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    fullName: localStorage.getItem('fullName') || '',
    email: localStorage.getItem('email') || '',
    status: localStorage.getItem('status') || '',
    token: localStorage.getItem('token') || '',
    role: localStorage.getItem('role') || ''
  })

  return (
    < AuthContext.Provider
      value={{ authData, setAuthData }}
    >
      {children}
    </AuthContext.Provider>
  )
}
