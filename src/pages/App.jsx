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
      <Statistics></Statistics>
      <Main>
        {/** Acá van los componentes de tipo Page */}
      </Main>
      <Footer />
    </>
  )
}

export default App
