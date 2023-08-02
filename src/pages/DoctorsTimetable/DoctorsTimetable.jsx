import React, { useState } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import { dataDepartament, dataTimetable } from '../../components/data'
import './DoctorsTimetable.scss'

const DoctorsTimetable = () => {
  const [specialty, setSpecialty] = useState('All department')
  const hours = [
    {
      start_time: '9:00',
      end_time: '12:00'
    },
    {
      start_time: '12:00',
      end_time: '15:00'
    },
    {
      start_time: '12:00',
      end_time: '15:00'
    },
    {
      start_time: '15:00',
      end_time: '18:00'
    },
    {
      start_time: '18:00',
      end_time: '21:00'
    },
    {
      start_time: '21:00',
      end_time: '24:00'
    }
  ]

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Doctors timetable'
    }
  ]

  const handlechange = (event) => {
    setSpecialty(event.target.value)
  }

  const filterTimetable = specialty === 'All department'
    ? dataTimetable()
    : (dataTimetable().filter((item) => item.doctor.specialty.toLowerCase() === specialty.toLowerCase()))

  return (
    <section className='doctors-timetable'>
      <Jumbotron
        pageTitle={'Doctors timetable'}
        backgroundClassName="doctors-timetable__bg"
        breadcrumb={breadcrumb}
      />
      <section className='doctors-timetable__container'>
        <header className='doctors-timetable__header'>
          <h2 className='doctors-timetable__header__title'>Timetable information</h2>
          <select
            id ='specialty'
            name='specialty'
            value={specialty}
            onChange={handlechange}
            required>
            <option value='All department'>All department</option>
             {dataDepartament().map((item) => {
               return (
                <option key={item.id} value={item.name}>{item.name}</option>
               )
             })}
            </select>
            <a className='doctors-timetable__header__button'>
              Book appointment
            </a>
        </header>
        <div className='doctors-timetable__table-container'>
          <table className='table'>
            <thead>
              <tr>
                <th scope="col">Duty Time</th>
                {days.map((day, index) => {
                  return (
                    <th key={index} scope="col">{day}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {hours.map((hour, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {`${hour.start_time} - ${hour.end_time}`}
                    </td>
                    {days.map((day, index) => {
                      return (
                        <td key={index}>
                            {filterTimetable.map((item, index) => {
                              return (
                                (
                                  item.day.toLowerCase() === day.toLowerCase() && item.start_time === hour.start_time
                                )
                                  ? (
                                <div className='container_doctor' key={item.id}>
                                  <h3 className='doctor_name'>{`Dr. ${item.doctor.name}`}</h3>
                                  <span className='doctor_post'>{item.doctor.specialty}</span>
                                </div>
                                    )
                                  : (
                                      null
                                    )
                              )
                            })}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      </section>
    </section>
  )
}

export default DoctorsTimetable
