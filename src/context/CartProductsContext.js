import { createContext } from 'react'

const CartProductsContext = createContext({ productsList: [], setProductsList: undefined })

export default CartProductsContext
