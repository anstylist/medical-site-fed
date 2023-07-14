import React from 'react'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './App.scss'
import Statistics from '../components/Statistics/Statistics'

function App () {
  return (
    <>
      <Header />
      <Main />
      <Statistics></Statistics>
      <Footer />
    </>
  )
}

export default App
