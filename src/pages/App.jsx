import React, { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { CartProductsProvider } from '../context/CartProductsContext'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import './App.scss'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

function App () {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Elements stripe={stripePromise}>
        <CartProductsProvider>
          <Header />
          <Main>
            <Outlet />
          </Main>
          <Footer />
        </CartProductsProvider>
      </Elements>
    </>
  )
}

export default App
