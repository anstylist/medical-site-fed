import { http } from './http'

export const doctorAll = async () => {
  try {
    const { data } = await http.get('/doctors/all')
    return data
  } catch (error) {
    throw error.message
  }
}

export const patientAll = async () => {
  try {
    const { data } = await http.get('/patients/all')
    return data
  } catch (error) {
    throw error.message
  }
}

export const appointmentsAll = async () => {
  try {
    const { data } = await http.get('/appointments/all')
    return data
  } catch (error) {
    throw error.message
  }
}
