import React from 'react'
import './About.scss'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import Statistics from '../Statistics/Statistics'
import WhyPeople from '../WhyPeople/WhyPeople'
import WideVideoSection from '../WideVideoSection/WideVideoSection'
import DoctorCarousel from '../DoctorCarousel/DoctorCarousel'
import OurPartners from '../OurPartners/OurPartners'
import OurTestimonials from '../OurTestimonials/OurTestimonials'
import Jumbotron from '../Jumbotron/Jumbotron'
// rgb(82, 87, 82);
function About () {
  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'About'
    }
  ]
  return (
   <div>
     <Jumbotron
      pageTitle = {'About'}
      backgroundClassName="About__bg"
      breadcrumb={breadcrumb}
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
