import { http } from './http'

export default class CheckoutService {
  static checkout ({ paymentMethod, amount, checkout, products }) {
    return http.post('/checkout', { paymentMethod, amount, checkout, products })
      .then((response) => {
        console.log('--- AC - ', response.data)
        return response.data
      })
  }
}
