import React, { useState } from 'react'
import { dataCountries, dataDepartament, dataDoctor } from '../../components/data'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import { FaRegCalendarAlt } from 'react-icons/fa'
import './FindDoctor.scss'

const FindDoctor = () => {
  const [findDoctor, setFindDoctor] = useState({
    specialty: '',
    doctor: '',
    location: '',
    date_appointment: ''
  })

  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Find a doctor'
    }
  ]

  const handlechange = (event) => {
    setFindDoctor({ ...findDoctor, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(findDoctor)
    setFindDoctor({
      specialty: '',
      doctor: '',
      location: '',
      date_appointment: ''
    })
  }

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
          <a className='find-doctor__header--appointment' href='#'>
           <FaRegCalendarAlt size={24}/>Appointment
          </a>
        </div>
        <form className='find-doctor__form' onSubmit={onSubmit}>
          <h3 className='find-doctor__form__title'>Type here to find a doctor by name or specialty</h3>
          <div className='find-doctor__form__container'>
            <div className='find-doctor__form__container--section'>
                <label htmlFor='specialty'>Specialty</label>
                <select
                id ='specialty'
                name='specialty'
                value={findDoctor.specialty}
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
              <div className='find-doctor__form__container--section'>
                <label htmlFor='specialty'>Preferred doctor</label>
                <select
                id ='doctor'
                name='doctor'
                value={findDoctor.doctor}
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
              <div className='find-doctor__form__container--section'>
                <label htmlFor='specialty'>Location</label>
                <select
                id ='location'
                name='location'
                value={findDoctor.location}
                onChange={handlechange}
                >
                  <option value=''>-- Select location --</option>
                    {dataCountries().map((item) => {
                      return (
                        <option key={item.id} value={item.name}>{item.name}</option>
                      )
                    })}
                </select>
              </div>
              <div className='find-doctor__form__container--section'>
              <label htmlFor='date_appointment'>Date of appointment</label>
               <input
                id='date_appointment'
                name='date_appointment'
                type='date'
                value={findDoctor.date_appointment}
                onChange={handlechange}
                />
            </div>
          </div>
          <button type='submit' name='submit' className='find-doctor__form--button'>
            Search →
          </button>
        </form>
      </section>
    </section>
  )
}

export default FindDoctor
