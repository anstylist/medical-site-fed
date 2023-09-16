/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

const CartProductsContext = createContext()

export const CartProductsProvider = ({ children }) => {
  const productsInStorage = localStorage.getItem('cartProducts') || '[]'

  const [productsList, setCartProductsList] = useState(JSON.parse(productsInStorage || '[]'))

  const setProductsList = (products) => {
    let newProductsList = products

    if (typeof products === 'function') {
      newProductsList = products(productsList)
    }

    setCartProductsList(newProductsList)

    localStorage.setItem('cartProducts', JSON.stringify(newProductsList || []))
  }

  return (
    <CartProductsContext.Provider
      value={{ productsList, setProductsList }}
    >
      {children}
    </CartProductsContext.Provider>
  )
}

export default CartProductsContext
