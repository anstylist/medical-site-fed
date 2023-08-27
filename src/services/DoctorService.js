import { http } from './http'

export const createDoctor = (doctor) => {
  try {
    const data = http.post('/doctors', doctor)
    return data
  } catch (error) {
    throw error.message
  }
}
