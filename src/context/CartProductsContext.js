import { createContext } from 'react'

const CartProductsContext = createContext({ productsList: [], setProductsList: () => {} })

export default CartProductsContext
