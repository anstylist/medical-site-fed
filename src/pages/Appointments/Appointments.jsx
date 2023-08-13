import React, { useState } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import { dataAppointments } from '../../components/data'
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard'
import PropTypes from 'prop-types'
import './Appointments.scss'

const Appointments = ({ type }) => {
  const [currentDataAppointments, setDataAppointments] = useState(dataAppointments())
  const [activeTab, setActiveTab] = useState(0)
  const stateAppointment = ['PENDING', 'DONE', 'CANCELLED']

  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'My Appointments'
    }
  ]
  const handleTabClick = (id) => {
    setActiveTab(id)
  }

  const handleStateAppointment = (id, newstate) => {
    const updateDataAppointment = currentDataAppointments.map((appointment) => {
      return appointment.id === id ? { ...appointment, state: newstate } : appointment
    })
    setDataAppointments(updateDataAppointment)
  }

  return (
    <section className='appointments'>
      <Jumbotron
        pageTitle={'My Appointments'}
        backgroundClassName="appointments__bg"
        breadcrumb={breadcrumb}
      />
      <section className='appointments__container'>
        <ul className="appointments__tabs">
          {stateAppointment.map((title, index) =>
            <li
              key={index}
              className={`appointments__tabs--title ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}>{title}</li>
          )}
        </ul>

        <div className="appointments__tab-content">
          {
            stateAppointment.map((state, index) =>
              activeTab === index &&
              <div key={index} className="tab_panel">
                {currentDataAppointments
                  .filter((item) => item.state === state)
                  .map((appointments) => (
                    <AppointmentCard key={appointments.id} appointment={appointments} type={type} onStateAppointment={handleStateAppointment} />
                  ))}
              </div>
            )
          }
        </div>
      </section>
    </section>
  )
}

/**
 *Componente de citas médicas
 * @param {boolean} type - Indica si el tipo es DOCTOR (true) o PACIENTE (false).
 */
Appointments.propTypes = {
  type: PropTypes.bool.isRequired
}

export default Appointments
