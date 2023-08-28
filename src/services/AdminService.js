import { http } from './http'

export const doctorAll = async () => {
  try {
    const { data } = await http.get('/doctors/all')
    return data
  } catch (error) {
    throw error.message
  }
}
