import React, { useEffect, useState } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import Checkout from '../pages/Checkout/Checkout'
import UserContext from '../context/UserContext'
import CartProductsContext from '../context/CartProductsContext'
// Temporary
import cartProducts from '../__mocks__/cart-products.json'
import './App.scss'

function App() {
  // TODO: set the productList initial value to an empty [] array after implementing the Cart component
  const [productsList, setProductsList] = useState(cartProducts)
  const [user, setUser] = useState({})

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <CartProductsContext.Provider value={{ productsList, setProductsList }}>
          <Header />
          <Main>
            <Outlet />
          </Main>
          <Footer />
        </CartProductsContext.Provider>
      </UserContext.Provider>

    </>
  )
}

export default App
