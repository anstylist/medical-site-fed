import { http } from './http'

export default class CheckoutService {
  static checkout ({ paymentMethod, amount, checkout, products }) {
    const processedProducts = products.map(product => ({
      ...product,
      id: undefined
    }))

    return http.post('/checkout', { paymentMethod, amount, checkout, products: processedProducts })
      .then((response) => {
        return response.data
      })
      .catch(error => {
        throw new Error(error.response.data.message)
      })
  }
}
