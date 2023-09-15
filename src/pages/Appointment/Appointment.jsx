import React, { useContext, useEffect, useState } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import emailjs from '@emailjs/browser'
import { dataRh, dataHospitals } from '../../components/data'
import { getPatientProfile } from '../../services/PatientService'
import { AuthContext } from '../../context/AuthContext'
import { getCountry } from '../../services/CountryService'
import { getAllSpeciality } from '../../services/Speciality'
import { getAllDoctor } from '../../services/DoctorService'
import { createAppointment } from '../../services/AppointmentService'
import './Appointment.scss'
import Swal from 'sweetalert2'
import Loading from '../../components/Loading/Loading'

const Appointment = () => {
  const { authData } = useContext(AuthContext)
  const [patientData, setPatientData] = useState(null)
  const [countryData, setCountryData] = useState([])
  const [specialities, setSpecialities] = useState([])
  const [doctorsData, setDoctorsData] = useState([])
  const [loading, setLoading] = useState(false)
  const [appointment, setAppointment] = useState({
    name: authData.fullName,
    email: authData.email,
    phone: (patientData && patientData.phone) || '',
    birthDate: (patientData && new Date(patientData.birthDate).toISOString().split('T')[0]) || '',
    rh: (patientData && patientData.rh) || '',
    gender: (patientData && patientData.gender) || '',
    hospital: '',
    appointmentDataTime: '',
    message: '',
    nationality: {
      id: (patientData && countryData.filter((country) => country.id === patientData.countryId)[0].id) || '',
      name: (patientData && countryData.filter((country) => country.id === patientData.countryId)[0].name) || ''
    },
    speciality: {
      id: '',
      name: ''
    },
    doctor: {
      id: '',
      name: ''
    }
  })

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    // Este efecto se ejecutará cuando 'loading' cambie a 'false'.
    if (!loading) {
      initializeAppointment()
    }
  }, [loading])

  const initializeAppointment = () => {
    // Aquí puedes inicializar 'appointment' con los valores necesarios
    // basados en 'patientData' y 'countryData'.
    const newAppointment = {
      name: authData.fullName,
      email: authData.email,
      phone: (patientData && patientData.phone) || '',
      birthDate: (patientData && new Date(patientData.birthDate).toISOString().split('T')[0]) || '',
      rh: (patientData && patientData.rh) || '',
      gender: (patientData && patientData.gender) || '',
      hospital: '',
      appointmentDataTime: '',
      message: '',
      nationality: {
        id: (patientData && countryData.filter((country) => country.id === patientData.countryId)[0].id) || '',
        name: (patientData && countryData.filter((country) => country.id === patientData.countryId)[0].name) || ''
      },
      speciality: {
        id: '',
        name: ''
      },
      doctor: {
        id: '',
        name: ''
      }
    }
    setAppointment(newAppointment)
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const [patientData, countryData, specialities, doctorsData] = await Promise.all([getPatientProfile(), getCountry(), getAllSpeciality(), getAllDoctor()])
      setCountryData(countryData)
      setPatientData(patientData)
      setSpecialities(specialities)
      setDoctorsData(doctorsData)
    } catch (error) {
      console.error('Error loading data:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Appointment'
    }
  ]
  console.log(patientData)
  const doctorFilter = doctorsData.filter((doctor) => doctor.specialities.includes(appointment.speciality.name))

  const handleChange = (event) => {
    const { name, value } = event.target
    setAppointment({ ...appointment, [name]: value })
  }

  const selectHandleChange = (event) => {
    const { name, value } = event.target
    setAppointment({ ...appointment, [name]: JSON.parse(value) })
  }

  const handleSendMail = () => {
    try {
      const date = new Date(appointment.appointmentDataTime)
      const templateParams = {
        to_name: appointment.name,
        speciality: appointment.speciality.name,
        doctor: appointment.doctor.name,
        hospital: appointment.hospital,
        date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
        hour: `${date.getHours()}:${date.getMinutes()}`,
        reason: appointment.message,
        to_email: appointment.email
      }
      emailjs.send('service_2rz54gq', 'template_36hgr8m', templateParams, 'wolwL4XHVd6GZeMxQ')
    } catch (error) {
      throw error.message
    }
  }

  const resetForm = (event) => {
    setAppointment(
      {
        ...appointment,
        hospital: '',
        appointmentDataTime: '',
        message: '',
        speciality: {
          id: '',
          name: ''
        },
        doctor: {
          id: '',
          name: ''
        }
      }
    )
  }

  const onCreateAppointment = async () => {
    try {
      const config = {
        patientData: {
          rh: appointment.rh,
          gender: appointment.gender,
          birthDate: new Date(appointment.birthDate),
          phone: appointment.phone,
          countryId: appointment.nationality.id
        },
        appointmentData: {
          appointmentDataTime: new Date(appointment.appointmentDataTime),
          hospital: appointment.hospital,
          reason: appointment.message,
          status: 'PENDING',
          doctorId: appointment.doctor.id,
          specialityId: appointment.speciality.id
        }
      }
      await createAppointment(config)
      handleSendMail()
      Swal.fire({
        title: 'Medical Appointment Scheduled',
        html: `
          <p>Your medical appointment has been successfully scheduled.</p>
          <p>We've sent an email with all the appointment details.</p>
        `,
        icon: 'success',
        confirmButtonText: 'Got It'
      })
    } catch (error) {
      Swal.fire(
        'Error!',
        error,
        'error'
      )
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    await onCreateAppointment()
    resetForm()
  }

  if (loading) {
    return <Loading />
  }

  return (
    <section className='appointment'>
      <Jumbotron
        pageTitle={'Appointment'}
        backgroundClassName="appointment__bg"
        breadcrumb={breadcrumb}
      />
      <section className='appointment__container'>
        <header className='appointment__header'>
          <h2 className='appointment__header__title'>If you need to appointment</h2>
        </header>

        <form className='appointment__form' onSubmit={onSubmit}>
          <div className='appointment__form__patient'>
            <h3 className='appointment__form__title'>Patient information</h3>
            <div className='appointment__form__container'>
              <div className='appointment__form__container--section'>
                <label htmlFor='name'>Patient name</label>
                <input
                  id='name'
                  name='name'
                  placeholder='Christian foreman'
                  type='text'
                  value={appointment.name}
                  disabled
                  required
                />
              </div>
              <div className='appointment__form__container--section'>
                <label htmlFor='email'>Email address</label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Email address'
                  value={appointment.email}
                  disabled
                  required
                />
              </div>
              <div className='appointment__form__container--section'>
                <label htmlFor='phone'>Phone number</label>
                <input
                  id='phone'
                  name='phone'
                  type='number'
                  placeholder='Phone number'
                  value={appointment.phone}
                  onChange={handleChange}
                  disabled={!!patientData}
                  required
                  data-cy="phone"
                />
              </div>
              <div className='appointment__form__container--section'>
                <label htmlFor='nationality'>Nationality</label>
                <select
                  id='nationality'
                  name='nationality'
                  value={JSON.stringify(appointment.nationality)}
                  onChange={selectHandleChange}
                  disabled={!!patientData}
                  required
                  data-cy="nationality">
                  <option value=''>-- Select nationality --</option>
                  {countryData.map((item) => {
                    return (
                      <option
                        key={item.id}
                        value={JSON.stringify({ id: item.id, name: item.name })}
                      >{item.name}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className='appointment__form__container--section'>
                <label htmlFor='birthDate'>Date of birth</label>
                <input
                  id='birthDate'
                  name='birthDate'
                  type='date'
                  value={appointment.birthDate}
                  onChange={handleChange}
                  disabled={!!patientData}
                  required
                  data-cy="birthDate"
                />
              </div>
              <div className='appointment__form__container--section'>
                <label htmlFor='rh'>RH</label>
                <select
                  id='rh'
                  name='rh'
                  value={appointment.rh}
                  onChange={handleChange}
                  disabled={!!patientData}
                  required
                  data-cy="rh">
                  <option value=''>-- Select RH --</option>
                  {dataRh().map((item) => {
                    return (
                      <option key={item.id} value={item.name}>{item.name}</option>
                    )
                  })}
                </select>
              </div>
              <fieldset>
                <legend>Select Gender</legend>
                <input
                  type='radio'
                  id='male'
                  name='gender'
                  value='MALE'
                  onChange={handleChange}
                  disabled={!!patientData}
                  required
                  data-cy="gender"
                  checked={patientData && patientData.gender === 'MALE'}
                />
                Male
                <input
                  type='radio'
                  id='female'
                  name='gender'
                  value='FEMALE'
                  onChange={handleChange}
                  disabled={!!patientData}
                  checked={patientData && patientData.gender === 'FEMALE'}
                />
                Female
              </fieldset>
            </div>
          </div>
          <div className='appointment__form__appointment'>
            <h3 className='appointment__form__title'>Appointment information</h3>
            <div className='appointment__form__container'>
              <div className='appointment__form__container--section'>
                <label htmlFor='specialty'>Speciality</label>
                <select
                  id='speciality'
                  name='speciality'
                  value={JSON.stringify(appointment.speciality)}
                  onChange={selectHandleChange}
                  required
                  data-cy="speciality-select">
                  <option value=''>-- Select speciality --</option>
                  {specialities.map((item) => {
                    return (
                      <option
                        key={item.id}
                        value={JSON.stringify({ id: item.id, name: item.name })}
                      >{item.name
                        }</option>
                    )
                  })}
                </select>
              </div>
              <div className='appointment__form__container--section'>
                <label htmlFor='doctor'>Preferred doctor</label>
                <select
                  id='doctor'
                  name='doctor'
                  value={JSON.stringify(appointment.doctor)}
                  onChange={selectHandleChange}
                  required
                  data-cy="doctor-select">
                  <option value=''>-- Select doctor --</option>
                  {
                    doctorFilter.map((item) => {
                      return (
                        <option
                          key={item.id}
                          value={JSON.stringify({ id: item.id, name: item.fullName })}
                        >{item.fullName}
                        </option>
                      )
                    })
                  }
                </select>
              </div>
              <div className='appointment__form__container--section'>
                <label htmlFor='hospital'>At the following hospital</label>
                <select
                  id='hospital'
                  name='hospital'
                  value={appointment.hospital}
                  onChange={handleChange}
                  required
                  data-cy="hospital-select">
                  <option value=''>-- Select hospital --</option>
                  {dataHospitals().map((item) => {
                    return (
                      <option key={item.id} value={item.name}>{item.name}</option>
                    )
                  })}
                </select>
              </div>
              <div className='appointment__form__container--section'>
                <label htmlFor='appointmentDataTime'>Date of appointment</label>
                <input
                  id='appointmentDataTime'
                  name='appointmentDataTime'
                  type='datetime-local'
                  value={appointment.appointmentDataTime}
                  onChange={handleChange}
                  required
                  data-cy="appointment-date-input"
                />
              </div>
              <label htmlFor='message' id='label-textarea'>Reason for consult</label>
              <textarea
                placeholder="Your Message"
                id='message'
                name='message'
                value={appointment.message}
                onChange={handleChange}
                required
                data-cy="message-textarea"
              />
            </div>
          </div>
          <button type='submit' name='submit' className='appointment__form--button' data-cy="submit-button">
            Submit →
          </button>
        </form>
      </section>
    </section>
  )
}

export default Appointment
