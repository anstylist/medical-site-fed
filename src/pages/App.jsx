import React from 'react'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import OurDepartament from '../components/OurDepartament/OurDepartament'
import Statistics from '../components/Statistics/Statistics'
import './App.scss'
import OurPartners from '../components/OurPartners/OurPartners'

function App () {
  return (
    <>
      <Header />
      <Main>
        {/** Acá van los componentes de tipo Page */}
        <Statistics></Statistics>
        <OurDepartament></OurDepartament>
        <OurPartners></OurPartners>
      </Main>
      <Footer />
    </>
  )
}

export default App
