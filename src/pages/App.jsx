import React from 'react'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import OurDepartament from '../components/OurDepartament/OurDepartament'
import Statistics from '../components/Statistics/Statistics'
import './App.scss'

function App () {
  return (
    <>
      <Header />
      <Main>
        {/** Acá van los componentes de tipo Page */}
      </Main>
      <Footer />
    </>
  )
}

export default App
