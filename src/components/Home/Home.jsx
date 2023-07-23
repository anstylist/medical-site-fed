import React from 'react'
import AppointmentForm from '../AppointmentForm/AppointmentForm'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import Statistics from '../Statistics/Statistics'
import OurDepartment from '../OurDepartment/OurDepartment'
import WideVideoSection from '../WideVideoSection/WideVideoSection'
import GalleryCarousel from '../GalleryCarousel/GalleryCarousel'
import BeforeAfter from '../BeforeAfter/BeforeAfter'
import OurTestimonials from '../OurTestimonials/OurTestimonials'
import DoctorCarousel from '../DoctorCarousel/DoctorCarousel'
import OurPartners from '../OurPartners/OurPartners'
import LatestNews from '../LatestNews/LatestNews'
import Faq from '../Faq/Faq'

const Home = () => {
  return (
    <div>
      <AppointmentForm/>
      <WhoWeAre/>
      <Statistics/>
      <OurDepartment/>
      <WideVideoSection/>
      <GalleryCarousel/>
      <BeforeAfter/>
      <OurTestimonials/>
      <DoctorCarousel/>
      <OurPartners/>
      <LatestNews/>
      <Faq/>
    </div>
  )
}

export default Home
