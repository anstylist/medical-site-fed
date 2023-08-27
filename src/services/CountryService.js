import { http } from './http'

export const getCountry = async () => {
  try {
    const { data } = await http.get('/country')
    return data
  } catch (error) {
    throw error.message
  }
}
