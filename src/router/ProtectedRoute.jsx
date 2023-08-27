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
  const { roles, token, status } = authData
  const { isExpired } = useJwt(token)

  const hasValidRole = roles.some(role => authorizedRoles.includes(role))

  if (!hasValidRole || isExpired || !status) {
    return <Navigate to={redirectTo} replace />
  }

  return children || <Outlet />
}
