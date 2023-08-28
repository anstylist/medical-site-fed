import { http } from './http'

export async function createAppointment(config) {
  try {
    const { data } = await http.post('/appointments', config)
    return data
  } catch (error) {
    throw error.message
  }
}

export async function getAppointmentsByPatient() {
  try {
    const { data } = await http.get('/appointments/patient')
    return data
  } catch (error) {
    throw error.message
  }
}
