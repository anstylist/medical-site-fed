import { useContext } from 'react'
import CartProductsContext from '../context/CartProductsContext'

export default () => {
  const { setProductsList } = useContext(CartProductsContext)

  const handleAddToCart = (product, quantity) => {
    setProductsList(prevProducts => {
      const doesProductExist = prevProducts.find((productCart) => productCart.id === product.id)
      let actualQuantity = quantity

      if (actualQuantity > product.stock) {
        actualQuantity = product.stock
      }

      if (!doesProductExist) {
        return [...prevProducts, { ...product, quantity: actualQuantity }]
      }

      return prevProducts.reduce((acc, item) => {
        if (item.id === product.id) {
          acc.push({
            ...item,
            quantity: item.quantity + actualQuantity
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
