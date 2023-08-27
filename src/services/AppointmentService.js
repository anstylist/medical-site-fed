import { http } from './http'

export function createAppointment(config) {
  try {
    const { data } = http.post('/appointments', config)
    return data
  } catch (error) {
    return error.message
  }
}
