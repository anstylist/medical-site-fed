/* eslint-disable react/prop-types */
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useJwt } from 'react-jwt'
import Swal from 'sweetalert2'

export const ProtectedRoute = (
  {
    authorizedRoles,
    redirectTo = '/',
    children
  }
) => {
  const ROLE = localStorage.getItem('role')
  const TOKEN = localStorage.getItem('token')
  const STATUS = localStorage.getItem('status')
  const { isExpired } = useJwt(TOKEN)

  if (!authorizedRoles.includes(ROLE) || isExpired || !STATUS) {
    return <Navigate to={redirectTo} replace />
  }

  return children || <Outlet />
}
