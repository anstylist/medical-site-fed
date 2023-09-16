import React, { useEffect, useState } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './FindDoctor.scss'
import { getAllSpeciality } from '../../services/Speciality'
import { getAllDoctor } from '../../services/DoctorService'
import Swal from 'sweetalert2'
import DoctorCard from '../../components/DoctorCarousel/DoctorCard'

const FindDoctor = () => {
  const [findDoctor, setFindDoctor] = useState({
    specialty: 'ALL',
    doctor: ''
  })
  const [allSpecialities, setAllSpecialities] = useState([])
  const [allDoctors, setAllDoctors] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Find a doctor'
    }
  ]

  const fetchData = async () => {
    try {
      const [dataSpecialities, dataDoctors] = await Promise.all([getAllSpeciality(), getAllDoctor()])
      setAllSpecialities(dataSpecialities)
      setAllDoctors(dataDoctors)
    } catch (error) {
      Swal.fire(
        'Error!',
        error,
        'error'
      )
    }
  }

  const handlechange = (event) => {
    const { name, value } = event.target

    if (name === 'specialty') {
      setFindDoctor({ specialty: value, doctor: '' })
    } else {
      setFindDoctor({ ...findDoctor, [name]: value })
    }
  }

  const doctorFilter = findDoctor.specialty === 'ALL'
    ? allDoctors
    : allDoctors.filter(
      !findDoctor.doctor
        ? (doctor) => doctor.specialities.includes(findDoctor.specialty)
        : (doctor) => doctor.fullName.includes(findDoctor.doctor)
    )

  return (
    <section className='find-doctor'>
      <Jumbotron
        pageTitle={'Find a doctor'}
        backgroundClassName="find-doctor__bg"
        breadcrumb={breadcrumb}
      />
      <section className='find-doctor__container'>
        <div className='find-doctor__header'>
          <h3 className='find-doctor__header__text'>Find a doctor</h3>
          <Link to='/appointment' className='find-doctor__header--appointment'>
            <FaRegCalendarAlt size={24} />Appointment
          </Link>
        </div>
        <div className='find-doctor__form'>
          <h3 className='find-doctor__form__title'>Type here to find a doctor by name or specialty</h3>
          <div className='find-doctor__form__container'>
            <div className='find-doctor__form__container--section'>
              <label htmlFor='specialty'>Specialty</label>
              <select
                id='specialty'
                name='specialty'
                value={findDoctor.specialty}
                onChange={handlechange}
                required>
                <option value='ALL'> All Specialties</option>
                {allSpecialities.map((item) => {
                  return (
                    <option
                      key={item.id}
                      value={item.name}
                    >{item.name}</option>
                  )
                })}
              </select>
            </div>
            <div className='find-doctor__form__container--section'>
              <label htmlFor='doctor'>Preferred doctor</label>
              <select
                id='doctor'
                name='doctor'
                value={findDoctor.doctor}
                onChange={handlechange}
              >
                <option value=''>-- Select doctor --</option>
                {doctorFilter.map((item) => {
                  return (
                    <option key={item.id} value={item.fullName}>{item.fullName}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className='find-doctor__form__search'>
            {
              doctorFilter.map((doctor) => {
                return (
                  <DoctorCard
                    key={doctor.id}
                    id={doctor.id}
                    name={doctor.fullName}
                    specialities={doctor.specialities}
                    image={doctor.image}
                    phone={doctor.phone}
                    email={doctor.email}
                    socialLinks={doctor.socialLinks}
                    externalClass="find-doctor__card"
                  />
                )
              })
            }
          </div>
        </div>
      </section>
    </section>
  )
}

export default FindDoctor
