import { http } from './http'

const hasRole = (user) => {
  if (user.admin) return 'ADMIN'
  if (user.patient) return 'PATIENT'
  if (user.doctor) return 'DOCTOR'
  return 'USER'
}

export const loginService = async (email, password) => {
  try {
    const { data } = await http.post('/auth/login', { email, password })

    // We save in the localstore
    localStorage.setItem('fullName', data.profile.fullName)
    localStorage.setItem('email', data.profile.email)
    localStorage.setItem('status', data.profile.status)
    localStorage.setItem('token', data.token)
    localStorage.setItem('role', hasRole(data.profile))

    return data
  } catch (error) {
    throw error.response.data
  }
}
