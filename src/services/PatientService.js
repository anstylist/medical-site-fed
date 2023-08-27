import { http } from './http'

export const getPatientProfile = async () => {
  try {
    const { data } = await http.get('/patients')
    return data
  } catch (error) {
    throw error.message
  }
}
