import React, { useEffect, useState } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import CartProductsContext from '../context/CartProductsContext'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

// Temporary
import cartProducts from '../__mocks__/cart-products.json'
import './App.scss'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

function App () {
  // TODO: set the productList initial value to an empty [] array after implementing the Cart component
  const [productsList, setProductsList] = useState(cartProducts)

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Elements stripe={stripePromise}>
        <CartProductsContext.Provider value={{ productsList, setProductsList }}>
          <Header />
          <Main>
            <Outlet />
          </Main>
          <Footer />
        </CartProductsContext.Provider>
      </Elements>
    </>
  )
}

export default App
