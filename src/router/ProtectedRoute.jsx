/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useJwt } from 'react-jwt'
import { AuthContext } from '../context/AuthContext'

export const ProtectedRoute = (
  {
    authorizedRoles,
    redirectTo = '/',
    children
  }
) => {
  const { authData } = useContext(AuthContext)
  const ROLE = authData.role
  const TOKEN = authData.token
  const STATUS = authData.status
  const { isExpired } = useJwt(TOKEN)

  if (!authorizedRoles.includes(ROLE) || isExpired || !STATUS) {
    return <Navigate to={redirectTo} replace />
  }

  return children || <Outlet />
}
