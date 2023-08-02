import React from 'react'
import './About.scss'
import WhoWeAre from '../../components/WhoWeAre/WhoWeAre'
import Statistics from '../../components/Statistics/Statistics'
import WhyPeople from '../../components/WhyPeople/WhyPeople'
import WideVideoSection from '../../components/WideVideoSection/WideVideoSection'
import DoctorCarousel from '../../components/DoctorCarousel/DoctorCarousel'
import OurPartners from '../../components/OurPartners/OurPartners'
import OurTestimonials from '../../components/OurTestimonials/OurTestimonials'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
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
