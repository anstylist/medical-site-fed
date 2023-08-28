import { http } from './http'

export const getAllSpeciality = async () => {
  try {
    const { data } = await http.get('/speciality')
    return data
  } catch (error) {
    throw error.message
  }
}
