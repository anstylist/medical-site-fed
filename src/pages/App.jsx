import React from 'react'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './App.scss'
import AppointmentForm from '../components/AppointmentForm/AppointmentForm'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import OurDepartament from '../components/OurDepartament/OurDepartament'
import Statistics from '../components/Statistics/Statistics'
import OurPartners from '../components/OurPartners/OurPartners'
import OurTestimonials from '../components/OurTestimonials/OurTestimonials'
import WideVideoSection from '../components/WideVideoSection/WideVideoSection'
import DoctorCarousel from '../components/DoctorCarousel/DoctorCarousel'
import GalleryCarousel from '../components/GalleryCarousel/GalleryCarousel'
import LatestNews from '../components/LatestNews/LatestNews'

function App () {
  return (
    <>
      <Header />
      <Main>
        <AppointmentForm />
        <WhoWeAre />
        <Statistics />
        <OurDepartament />
        <WideVideoSection />
        <GalleryCarousel />
        <DoctorCarousel />
        <OurTestimonials />
        <OurPartners />
        <LatestNews />
      </Main>
      <Footer />
    </>
  )
}

export default App
