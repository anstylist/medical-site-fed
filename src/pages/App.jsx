import React from 'react'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import './App.scss'
import About from './About/About'

function App () {
  return (
    <>
      <Header />
      <Main>
        <About/>
      </Main>
      <Footer />
    </>
  )
}

export default App
