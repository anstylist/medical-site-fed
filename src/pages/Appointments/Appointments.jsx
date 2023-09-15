/* eslint-disable indent */
import React, { useEffect, useState } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard'
import PropTypes from 'prop-types'
import './Appointments.scss'
import { getAppointmentsByDoctor, getAppointmentsByPatient } from '../../services/AppointmentService'
import Loading from '../../components/Loading/Loading'

const Appointments = ({ type }) => {
  const [currentDataAppointments, setDataAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState(0)
  const stateAppointment = ['PENDING', 'DONE', 'CANCELLED']

  useEffect(() => {
    loaderAppointmentByType(type)
  }, [])

  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: type ? 'My assigned appointments' : 'My Appointments'
    }
  ]
  const handleTabClick = (id) => {
    setActiveTab(id)
  }

  const handleStateAppointment = (id, newstate) => {
    const updateDataAppointment = currentDataAppointments.map((appointment) => {
      return appointment.id === id ? { ...appointment, status: newstate } : appointment
    })
    setDataAppointments(updateDataAppointment)
  }

  const loaderAppointmentByType = async (type) => {
    try {
      setLoading(true)
      const { appointment } = type
        ? await getAppointmentsByDoctor()
        : await getAppointmentsByPatient()
      setDataAppointments(appointment)
    } catch (error) {
      console.error('Error loading data:', error)
      throw error
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='appointments'>
      <Jumbotron
        pageTitle={type ? 'My assigned appointments' : 'My Appointments'}
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
                {loading && <Loading />}
                {!loading && (
                  currentDataAppointments
                    .filter((item) => item.status === state)
                    .length === 0
                    ? (
                      <p>No appointments are available for the selected state.</p>
                    )
                    : (
                      currentDataAppointments
                        .filter((item) => item.status === state)
                        .map((appointments) => (
                          <AppointmentCard
                            key={appointments.id}
                            appointment={appointments}
                            type={type}
                            onStateAppointment={handleStateAppointment}
                          />
                        ))
                    )
                )
                }
              </div>
            )
          }
        </div>
      </section>
    </section >
  )
}

export default Appointments

/**
 *Componente de citas médicas
 * @param {boolean} type - Indica si el tipo es DOCTOR (true) o PACIENTE (false).
 */
Appointments.propTypes = {
  type: PropTypes.bool.isRequired
}
