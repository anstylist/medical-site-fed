import React, { useState } from 'react'
import './Appointment.scss'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import { dataCountries, dataDepartament, dataHospitals, dataDoctor } from '../../components/data'

const Appointment = () => {
  const [appointment, setAppointment] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    date_barth: '',
    country: '',
    sex: '',
    specialty: '',
    doctor: '',
    hospital: '',
    date_appointment: '',
    message: ''
  })
  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Appointment'
    }
  ]

  const handlechange = (event) => {
    setAppointment({ ...appointment, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(appointment)
    setAppointment({
      name: '',
      email: '',
      phone: '',
      nationality: '',
      date_barth: '',
      country: '',
      sex: '',
      specialty: '',
      doctor: '',
      hospital: '',
      date_appointment: '',
      message: ''
    })
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
                onChange={handlechange}
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
                onChange={handlechange}
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
                  onChange={handlechange}
                  required
                  />
              </div>
              <div className='appointment__form__container--section'>
                <label htmlFor='nationality'>Nationality</label>
                  <select
                   id ='nationality'
                   name='nationality'
                   value={appointment.nationality}
                   onChange={handlechange}
                    required>
                    <option value=''>-- Select nationality --</option>
                    {dataCountries().map((item) => {
                      return (
                        <option key={item.id} value={item.name}>{item.name}</option>
                      )
                    })}
                  </select>
              </div>
              <div className='appointment__form__container--section'>
                <label htmlFor='date_barth'>Date of barth</label>
                <input
                  id='date_barth'
                  name='date_barth'
                  type='date'
                  value={appointment.date_barth}
                  onChange={handlechange}
                  required
                  />
              </div>
              <div className='appointment__form__container--section'>
                <label htmlFor='country'>Country of residence</label>
                  <select
                   id ='country'
                   name='country'
                   value={appointment.country}
                   onChange={handlechange}
                   required>
                    <option value=''>-- Select country --</option>
                    {dataCountries().map((item) => {
                      return (
                        <option key={item.id} value={item.name}>{item.name}</option>
                      )
                    })}
                  </select>
              </div>
                <fieldset>
                  <legend>Select sex</legend>
                    <input type='radio' id='male' name='sex' value='0' onChange={handlechange} required/>Male
                    <input type='radio' id='female' name='sex' value='1' onChange={handlechange}/> Female
                </fieldset>
            </div>
          </div>
          <div className='appointment__form__appointment'>
            <h3 className='appointment__form__title'>Appointment information</h3>
            <div className='appointment__form__container'>
            <div className='appointment__form__container--section'>
              <label htmlFor='specialty'>Specialty</label>
              <select
               id ='specialty'
               name='specialty'
               value={appointment.specialty}
               onChange={handlechange}
               required>
                <option value=''>-- Select specialty --</option>
                  {dataDepartament().map((item) => {
                    return (
                      <option key={item.id} value={item.name}>{item.name}</option>
                    )
                  })}
              </select>
            </div>
            <div className='appointment__form__container--section'>
              <label htmlFor='doctor'>Preferred doctor</label>
              <select
               id ='doctor'
               name='doctor'
               value={appointment.doctor}
               onChange={handlechange}
               required>
                <option value=''>-- Select doctor --</option>
                  {dataDoctor().map((item) => {
                    return (
                      <option key={item.id} value={item.name}>{item.name}</option>
                    )
                  })}
              </select>
            </div>
            <div className='appointment__form__container--section'>
              <label htmlFor='hospital'>At the following hospital</label>
              <select
               id ='hospital'
               name='hospital'
               value={appointment.hospital}
               onChange={handlechange}
               required>
                <option value=''>-- Select hospital --</option>
                  {dataHospitals().map((item) => {
                    return (
                      <option key={item.id} value={item.name}>{item.name}</option>
                    )
                  })}
              </select>
            </div>
            <div className='appointment__form__container--section'>
              <label htmlFor='date_appointment'>Date of appointment</label>
               <input
                id='date_appointment'
                name='date_appointment'
                type='date'
                value={appointment.date_appointment}
                onChange={handlechange}
                required
                />
            </div>
                <label htmlFor='message' id='label-textarea'>Reason of consultation</label>
                <textarea
                 placeholder="Your Message"
                 id='message'
                 name='message'
                 value={appointment.message}
                 onChange={handlechange}
                 required
                />
            </div>
          </div>
          <button type='submit' name='submit' className='appointment__form--button'>
            Submit →
          </button>
        </form>
      </section>
    </section>
  )
}

export default Appointment