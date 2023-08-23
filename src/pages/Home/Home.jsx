import React from 'react'
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm'
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre'
import Statistics from '../../components/Statistics/Statistics'
import OurDepartment from '../../components/OurDepartment/OurDepartment'
import WideVideoSection from '../../components/WideVideoSection/WideVideoSection'
import GalleryCarousel from '../../components/GalleryCarousel/GalleryCarousel'
import BeforeAfter from '../../components/BeforeAfter/BeforeAfter'
import OurTestimonials from '../../components/OurTestimonials/OurTestimonials'
import DoctorCarousel from '../../components/DoctorCarousel/DoctorCarousel'
import OurPartners from '../../components/OurPartners/OurPartners'
import LatestNews from '../../components/LatestNews/LatestNews'
import Faq from '../../components/FAQ/Faq'
import FirstViewUnlogged from '../../components/UnloggedMainView/FirstViewUnlogged'
// faq modification

const Home = () => {
  const ROLE = localStorage.getItem('role')
  return (
    <div>
      {(ROLE === 'PATIENT' || ROLE === 'USER') ? <AppointmentForm /> : <FirstViewUnlogged />}
      <WhoWeAre />
      <Statistics />
      <OurDepartment />
      <WideVideoSection />
      <GalleryCarousel />
      <BeforeAfter />
      <OurTestimonials />
      <DoctorCarousel />
      <OurPartners />
      <LatestNews />
      <Faq />
    </div>
  )
}

export default Home
