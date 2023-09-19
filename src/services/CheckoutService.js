import { http } from './http'

export default class CheckoutService {
  static checkout ({ paymentMethod, amount, checkout, products }) {
    return http.post('/checkout', { paymentMethod, amount, checkout, products })
      .then((response) => {
        return response.data
      })
      .catch(error => {
        throw new Error(error.response.data.message)
      })
  }
}
