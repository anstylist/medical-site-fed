import { useContext } from 'react'
import CartProductsContext from '../context/CartProductsContext'

export default () => {
  const { setProductsList } = useContext(CartProductsContext)

  const handleAddToCart = (product, quantity) => {
    setProductsList(prevProducts => {
      const doesProductExist = prevProducts.find((productCart) => productCart.id === product.id)

      if (!doesProductExist) {
        return [...prevProducts, { ...product, quantity }]
      }

      // If this reduce is ran the product already exists
      return prevProducts.reduce((acc, item) => {
        if (item.id === product.id) {
          acc.push({
            ...item,
            quantity: item.quantity + quantity
          })

          return acc
        }

        acc.push({
          ...item,
          quantity: item.quantity
        })

        return acc
      }, [])
    })
  }

  return {
    handleAddToCart,
    setProductsList
  }
}
