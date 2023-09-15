import { http } from './http'

export const createDoctor = async (doctor) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const data = await http.post('/doctors', doctor, config)
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

export const updateDoctor = async (id, doctor) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const data = await http.patch(`/doctors/${id}`, doctor, config)
    return data
  } catch (error) {
    throw error.message
  }
}
