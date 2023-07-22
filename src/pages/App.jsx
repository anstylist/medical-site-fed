import React from 'react'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './App.scss'
import AppointmentForm from '../components/MS-3 Form/AppointmentForm'
import BeforeAfter from '../components/BeforeAfter/BeforeAfter'
import WhoWeAre from '../components/MS-4 WhoWeAre/WhoWeAre'
import OurDepartament from '../components/OurDepartament/OurDepartament'
import Statistics from '../components/Statistics/Statistics'
import OurPartners from '../components/OurPartners/OurPartners'
import OurTestimonials from '../components/OurTestimonials/OurTestimonials'
import WideVideoSection from '../components/WideVideoSection/WideVideoSection'
import DoctorCarousel from '../components/DoctorCarousel/DoctorCarousel'
import GalleryCarousel from '../components/GalleryCarousel/GalleryCarousel'
import LatestNews from '../components/LatestNews/LatestNews'
import ContactUs from '../components/ContactUs/ContactUs'

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
        <BeforeAfter />
        <OurTestimonials />
        <OurPartners />
        <LatestNews />
        <ContactUs />
      </Main>
      <Footer />
    </>
  )
}

export default App
