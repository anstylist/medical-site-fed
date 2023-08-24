import { http } from './http'

export const updateUser = async (email, data) => {
  try {
    const response = await http.patch(`/users/${email}`, data)
    return response
  } catch (error) {
    throw error.message
  }
}
