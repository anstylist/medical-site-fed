import { http } from './http'

const hasRole = (user) => {
  const roles = []
  if (user.admin) roles.push('ADMIN')
  if (user.patient) roles.push('PATIENT')
  if (user.doctor) roles.push('DOCTOR')
  if (!roles.length) roles.push('USER')
  return roles
}

export const loginService = async (email, password) => {
  try {
    const { data } = await http.post('/auth/login', { email, password })

    // We save in the localstore
    localStorage.setItem('fullName', data.profile.fullName)
    localStorage.setItem('email', data.profile.email)
    localStorage.setItem('status', data.profile.status)
    localStorage.setItem('token', data.token)
    localStorage.setItem('roles', JSON.stringify(hasRole(data.profile)))

    return data
  } catch (error) {
    throw error.response.data
  }
}
