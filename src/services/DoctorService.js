import { http } from './http'

export const createDoctor = async (doctor) => {
  try {
    const data = await http.post('/doctors', doctor)
    return data
  } catch (error) {
    throw error.message
  }
}

export const getAllDoctorBySpeciality = (specialityName) => {
  try {
    const data = http.get(`/by-specialty?specialityName=${specialityName}`)
    return data
  } catch (error) {
    throw error.message
  }
}

export const getAllDoctor = async () => {
  try {
    const { data } = await http.get('/doctors')
    return data
  } catch (error) {
    throw error.message
  }
}
