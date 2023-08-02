import React from 'react'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
// import Home from '../components/Home/Home'
import EmergencyServices from '../pages/EmergencyServices/EmergencyServices'
import './App.scss'

function App () {
  return (
    <>
      <Header />
      <Main>
        <EmergencyServices />
      </Main>
      <Footer />
    </>
  )
}

export default App
