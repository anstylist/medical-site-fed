import React from 'react'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './App.scss'
import AppointmentForm from '../components/MS-3 Form/AppointmentForm'
import WhoWeAre from '../components/MS-4 WhoWeAre/WhoWeAre'
import OurDepartament from '../components/OurDepartament/OurDepartament'
import Statistics from '../components/Statistics/Statistics'
import OurPartners from '../components/OurPartners/OurPartners'
import OurTestimonials from '../components/OurTestimonials/OurTestimonials'
import GalleryCarousel from '../components/MS-8 GalleryCarousel/GalleryCarousel'
import LatestNews from '../components/Latest News/LatestNews'
import WideVideoSection from '../components/WideVideoSection/WideVideoSection'
import DoctorCarousel from '../components/DoctorCarousel/DoctorCarousel'

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
