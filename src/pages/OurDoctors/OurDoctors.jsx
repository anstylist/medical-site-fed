import React from 'react'
import doctorsList from '../../components/DoctorCarousel/doctors-list.json'
import DoctorCard from '../../components/DoctorCarousel/DoctorCard'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import './OurDoctors.scss'

function OurDoctors() {
  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Our Doctors'
    }
  ]

  return (
    <section className='our-doctors'>
      <Jumbotron
        pageTitle={'Our Doctors'}
        backgroundClassName="our-doctors__bg"
        breadcrumb={breadcrumb}
      />
      <section className='our-doctors__container'>
        <header className='our-doctors__header'>
          <h2 className='our-doctors__title'>Our doctors</h2>
          <h3 className='our-doctors__text'>Professional staff at our hospital</h3>
        </header>
        <div className='our-doctors__cards-box'>
          {doctorsList.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              id={doctor.id}
              name={doctor.name}
              specialities={doctor.specialities}
              image={doctor.image}
              socialLinks={doctor.socialLinks}
              externalClass="our-doctors__card"
            />
          ))}
        </div>
      </section>
    </section>
  )
}

export default OurDoctors
