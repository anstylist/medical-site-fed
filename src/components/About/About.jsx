import React from 'react'
import './About.scss'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import Statistics from '../Statistics/Statistics'
import WhyPeople from '../WhyPeople/WhyPeople'
import WideVideoSection from '../WideVideoSection/WideVideoSection'
import DoctorCarousel from '../DoctorCarousel/DoctorCarousel'
import OurPartners from '../OurPartners/OurPartners'
import OurTestimonials from '../OurTestimonials/OurTestimonials'
import Banner from '../Banner/Banner'
// rgb(82, 87, 82);
function About () {
  const banner = {
    title: 'Abuot',
    subtitle: 'Home / About'
  }
  return (
   <div>
     <Banner
      title = {banner.title}
      subtitle={banner.subtitle}
     />
     <WhoWeAre />
     <Statistics />
     <div className='whypeople'>
     <WhyPeople />
     <WideVideoSection />
     </div>
     <DoctorCarousel/>
     <OurPartners />
     <OurTestimonials/>
   </div>
  )
}

export default About
