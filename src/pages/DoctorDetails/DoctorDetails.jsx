import React from 'react'
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
    <Jumbotron
        pageTitle={'Doctors Details'}
        backgroundClassName="doctor-details__bg"
        breadcrumb={breadcrumb}
      />
    <DoctorDetailsForm />
  </>
  )
}

export default DoctorDetails
