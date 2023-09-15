import { http } from './http'

export const createProduct = async (product) => {
  const { data } = await http.post('/products', product)
  return data
}

export const updateProduct = async (id, product) => {
  const { data } = await http.patch(`/products/${id}`, product)
  return data
}

export const searchProducts = (search) => {
  const controller = new AbortController()

  console.log('--- AC - searchProducts')

  return {
    controller,
    productsPromise: http.get('/products', {
      signal: controller.signal,
      params: {
        search
      }
    }).then(({ data }) => {
      return data
    })
  }
}
