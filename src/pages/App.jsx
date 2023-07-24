import React from 'react'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import './App.scss'

function App () {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </>
  )
}

export default App
