import { http } from './http'

export const loginService = async (email, password) => {
  try {
    const { data } = await http.post('/auth/login', { email, password })
    // We save in the localstore
    localStorage.setItem('fullName', data.profile?.fullName || '')
    localStorage.setItem('email', data.profile?.email || '')
    localStorage.setItem('status', data.profile?.status || '')
    localStorage.setItem('token', data.token || '')
    localStorage.setItem('roles', JSON.stringify(data.profile?.roles || []))

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}
