import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import './DoctorDetails.scss'
import DoctorDetailsForm from './DoctorDetailsForm'
function DoctorDetails () {
  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Doctor Details'
    }
  ]
  return (
  <>
    <Header />
    <Jumbotron
        pageTitle={'Doctors Details'}
        backgroundClassName="doctor-details__bg"
        breadcrumb={breadcrumb}
      />
    <DoctorDetailsForm />
    <Footer />
  </>
  )
}

export default DoctorDetails
