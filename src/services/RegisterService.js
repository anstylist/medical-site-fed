import { http } from './http'

export const registerService = async (userData) => {
  try {
    const response = await http.post('/users', userData)
    return response.data
  } catch (error) {
    console.error(error)
    throw error.response.data.message
  }
}
