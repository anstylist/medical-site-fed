import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    fullName: localStorage.getItem('fullName') || '',
    email: localStorage.getItem('email') || '',
    status: localStorage.getItem('status') || '',
    token: localStorage.getItem('token') || '',
    role: localStorage.getItem('role') || [],
    password: localStorage.getItem('password') || '',
    country: localStorage.getItem('country') || '',
    city: localStorage.getItem('city') || '',
    bloodType: localStorage.getItem('bloodType') || '',
    phoneNumber: localStorage.getItem('phoneNumber') || ''
  })

  const updateAuthData = ({ fullName = '', email = '', status = '', token = '', roles = [], country = '', city = '', bloodType = '', phoneNumber = '' } = {}) => {
    setAuthData({
      fullName,
      email,
      status,
      token,
      roles,
      country,
      city,
      bloodType,
      phoneNumber
    })

    localStorage.setItem('fullName', fullName)
    localStorage.setItem('email', email)
    localStorage.setItem('status', status)
    localStorage.setItem('token', token)
    localStorage.setItem('role', roles)
    localStorage.setItem('country', country)
    localStorage.setItem('city', city)
    localStorage.setItem('bloodType', bloodType)
    localStorage.setItem('phoneNumber', phoneNumber)
  }

  return (
    <AuthContext.Provider
      value={{ authData, updateAuthData, setAuthData }}
    >
      {children}
    </AuthContext.Provider>
  )
}
