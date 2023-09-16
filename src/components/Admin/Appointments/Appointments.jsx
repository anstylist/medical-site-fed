import React, { useEffect, useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaUndoAlt, FaCheckCircle, FaTimesCircle, FaPhone, FaBirthdayCake, FaHospital, FaFlag, FaQuoteLeft, FaRegCalendarAlt } from 'react-icons/fa'
import { FaUserDoctor, FaAt, FaStethoscope, FaAddressCard, FaTransgender, FaMagnifyingGlass } from 'react-icons/fa6'
import { MdBloodtype } from 'react-icons/md'
import Loading from '../../Loading/Loading'
import './Appointments.scss'
import Swal from 'sweetalert2'
import { appointmentsAll } from '../../../services/AdminService'
import Modal from '../../Modal/Modal'
import { updateStatusAppointment } from '../../../services/AppointmentService'

const Appointments = () => {
  const [filter, setFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [appointmentsData, setAppointmentsData] = useState([])
  const [loading, setLoading] = useState(false)
  const headboard = ['Patient', 'Doctor', 'Speciality', 'Time', 'Date', 'Status', 'Details', 'Actions']

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await appointmentsAll()
      setAppointmentsData(data)
    } catch (error) {
      Swal.fire(
        'Error!',
        error,
        'warning'
      )
    } finally {
      setLoading(false)
    }
  }

  const changeHandler = (event) => {
    setFilter(event.target.value)
  }

  const nextPage = () => {
    if (currentPage + 9 < filterData.length) {
      setCurrentPage(currentPage + 9)
    }
  }

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 9)
    }
  }

  const updateStatus = async (id, status) => {
    const data = {
      status
    }
    await updateStatusAppointment(id, data)
    const updateData = appointmentsData.map((appointment) => {
      return appointment.id === id ? { ...appointment, status } : appointment
    })
    setAppointmentsData(updateData)
  }

  const modalUpdateStatus = (id, status) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Update appointment status!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await updateStatus(id, status)
          Swal.fire('Updated!', 'Successfully updated',
            'success'
          )
        } catch (error) {
          Swal.fire(
            'Error!',
            error,
            'warning'
          )
        }
      }
    })
  }

  const filterData = appointmentsData.filter(appointment => {
    const doctorFullName = appointment.doctor.fullName.toUpperCase()
    const patientFullName = appointment.patient.fullName.toUpperCase()
    const filterUpperCase = filter.toUpperCase()

    return doctorFullName.includes(filterUpperCase) || patientFullName.includes(filterUpperCase)
  })

  return (
    <div className='admin-appointments'>
      {
        loading && <Loading />
      }
      {
        !loading &&
        (
          <>
            <h2 className='title'> List of appointments</h2>
            <h2 className='subtitle'>{`${appointmentsData.length} registered appointments`}</h2>
            <div className='admin-appointments-header'>
              <FaMagnifyingGlass size={15} className='icon' />
              <input
                className='filterName'
                name='searchPatient'
                type='text'
                placeholder='Name of patient or doctor to be searched'
                onChange={changeHandler}
              />
            </div>
            <div className='admin-appointments-content'>
              <table className='table'>
                <thead>
                  <tr>
                    {headboard.map((title, index) => {
                      return (
                        <th key={index} scope="col">{title}</th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {
                    filterData.map((appointment, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {
                              appointment.patient.fullName
                            }
                          </td>
                          <td>
                            {
                              appointment.doctor.fullName
                            }
                          </td>
                          <td>
                            {
                              appointment.speciality
                            }
                          </td>
                          <td>
                            {
                              new Date(appointment.appointmentDataTime).toISOString().split('T')[0]
                            }
                          </td>
                          <td>
                            {
                              new Date(appointment.appointmentDataTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                            }
                          </td>
                          <td>
                            {appointment.status === 'PENDING'
                              ? <h4 style={{ color: '#E67E22', backgroundColor: '#FDEBD0', textAlign: 'center', borderRadius: '5px' }}>PENDING</h4>
                              : appointment.status === 'DONE'
                                ? <h4 style={{ color: '#5F8D4E', backgroundColor: '#E9F7EF', textAlign: 'center', borderRadius: '5px' }}>DONE</h4>
                                : <h4 style={{ color: '#F64E60', backgroundColor: '#FDEDEC', textAlign: 'center', borderRadius: '5px' }}>CANCELLED</h4>
                            }
                          </td>
                          <td>
                            <Modal
                              trigger={<a className='details'> Details <span><AiOutlineInfoCircle size={18} /></span></a>}
                              className='details__modal'
                            >
                              <div className='details__modal-content'>
                                <h3 className='title'>APPOINTMENT INFORMATION</h3>
                                <section>
                                  <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%' }}>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaRegCalendarAlt size={13} className='icon' />Date of appointment
                                        </span>
                                        {
                                          `${new Date(appointment.appointmentDataTime).toISOString().split('T')[0]} / 
                                          ${new Date(appointment.appointmentDataTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
                                        }
                                      </p>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaHospital size={13} className='icon' />Hospital
                                        </span>
                                        {
                                          appointment.hospital
                                        }
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaStethoscope size={13} className='icon' />Speciality
                                        </span>
                                        {
                                          appointment.speciality
                                        }
                                      </p>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaFlag size={13} className='icon' />status
                                        </span>
                                        {
                                          appointment.status === 'PENDING'
                                            ? <h4 style={{ color: '#E67E22', backgroundColor: '#FDEBD0', textAlign: 'center', borderRadius: '5px' }}>PENDING</h4>
                                            : appointment.status === 'DONE'
                                              ? <h4 style={{ color: '#5F8D4E', backgroundColor: '#E9F7EF', textAlign: 'center', borderRadius: '5px' }}>DONE</h4>
                                              : <h4 style={{ color: '#F64E60', backgroundColor: '#FDEDEC', textAlign: 'center', borderRadius: '5px' }}>CANCELLED</h4>
                                        }
                                      </p>
                                    </div>
                                  </div>
                                  <p>
                                    <span className='card-information_subtitle'>
                                      <FaQuoteLeft size={13} className='icon' />reason
                                    </span>
                                    {
                                      appointment.reason
                                    }
                                  </p>
                                </section>
                                <h3 className='title'>DOCTOR INFORMATION</h3>
                                <section className='card'>
                                  <img className='card-image' src={appointment.doctor.image} />
                                  <div className='card-information'>
                                    <div>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaUserDoctor size={13} className='icon' />Fullname
                                        </span>
                                        {`Dr. ${appointment.doctor.fullName}`}
                                      </p>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaStethoscope size={13} className='icon' />specialities
                                        </span>
                                        {
                                          appointment.doctor.specialities.map((speciality, index) => {
                                            return <h4 key={index}>{speciality}</h4>
                                          })
                                        }
                                      </p>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaPhone size={13} className='icon' />Phone
                                        </span>
                                        {appointment.doctor.phone}
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaAt size={13} className='icon' />Email
                                        </span>
                                        {appointment.doctor.email}
                                      </p>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaAddressCard size={13} className='icon' />Social
                                        </span>
                                        {
                                          appointment.doctor.socialLinks.map((social, index) => {
                                            return <h4 key={index}>{social.url}</h4>
                                          })
                                        }
                                      </p>
                                    </div>
                                  </div>
                                </section>
                                <h3 className='title'>PATIENT INFORMATION</h3>
                                <section className='card'>
                                  <img
                                    className='card-image'
                                    src={
                                      appointment.patient.gender === 'MALE'
                                        ? 'https://res.cloudinary.com/dzmkilinu/image/upload/v1694708778/medical-site/male_qo2f95.jpg'
                                        : 'https://res.cloudinary.com/dzmkilinu/image/upload/v1694708778/medical-site/female_svdxpr.jpg'
                                    } />
                                  <div className='card-information'>
                                    <div>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaUserDoctor size={13} className='icon' />Fullname
                                        </span>
                                        {appointment.patient.fullName}
                                      </p>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaBirthdayCake size={13} className='icon' />Birth Date
                                        </span>
                                        {
                                          new Date(appointment.patient.birthDate).toISOString().split('T')[0]
                                        }
                                      </p>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaPhone size={13} className='icon' />Phone
                                        </span>
                                        {appointment.patient.phone}
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaTransgender size={13} className='icon' />Gender
                                        </span>
                                        {
                                          appointment.patient.gender
                                        }
                                      </p>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <MdBloodtype size={13} className='icon' />RH
                                        </span>
                                        {
                                          appointment.patient.rh
                                        }
                                      </p>
                                      <p>
                                        <span className='card-information_subtitle'>
                                          <FaAt size={13} className='icon' />Email
                                        </span>
                                        {appointment.patient.email}
                                      </p>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </Modal>
                          </td>
                          <td>
                            <div className='actions'>
                              {
                                appointment.status === 'PENDING'
                                  ? <>
                                    <FaCheckCircle
                                      className='icon'
                                      size={18}
                                      onClick={() => modalUpdateStatus(appointment.id, 'DONE')} />
                                    <FaTimesCircle
                                      className='icon'
                                      size={18}
                                      onClick={() => modalUpdateStatus(appointment.id, 'CANCELLED')}
                                    />
                                  </>
                                  : < FaUndoAlt
                                    className='icon'
                                    size={18}
                                    onClick={() => modalUpdateStatus(appointment.id, 'PENDING')}
                                  />
                              }
                            </div>
                          </td>
                        </tr>
                      )
                    }).slice(currentPage, currentPage + 9)
                  }
                </tbody>
              </table>
              <div className='buttons'>
                <button
                  onClick={previousPage}
                >
                  Previous
                </button>
                <button
                  onClick={nextPage}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )
      }

    </div>
  )
}

export default Appointments
