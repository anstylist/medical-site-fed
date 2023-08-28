/* eslint-disable react/prop-types */
/* eslint-disable indent */
import React, { useState } from 'react'
import { BiTime } from 'react-icons/bi'
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5'
import { AiOutlineInfoCircle, AiOutlineUser } from 'react-icons/ai'
import { LiaStethoscopeSolid } from 'react-icons/lia'
import { FaUserDoctor } from 'react-icons/fa6'
import { BsEmojiFrown, BsEmojiWink } from 'react-icons/bs'
import Modal from '../Modal/Modal'
import './AppointmentCard.scss'

const AppointmentCard = ({ appointment, type, onStateAppointment }) => {
  const [message, setMessage] = useState(false)

  const options =
    type
      ? [
        {
          id: 0,
          title: 'Done',
          value: 'DONE',
          className: 'done',
          message: 'Do you want to confirm that appointment?',
          icon: <BsEmojiWink size={50} style={{ color: '#3FB6D6' }} />,
          rspuesta: 'Yes'
        },
        {
          id: 1,
          title: 'Cancel Appointment',
          value: 'CANCELLED',
          className: 'cancel',
          message: 'Do you want to cancel that appointment?',
          icon: <BsEmojiFrown size={50} style={{ color: '#3FB6D6' }} />,
          rspuesta: 'Yes'
        }
      ]
      : [
        {
          id: 0,
          title: 'Cancel Appointment',
          value: 'CANCELLED',
          className: 'cancel',
          message: 'Do you want to cancel that appointment?',
          icon: <BsEmojiFrown size={50} style={{ color: '#3FB6D6' }} />,
          rspuesta: 'Yes'
        }
      ]

  const handleStateAppointment = (newstate) => {
    setMessage(true)
    setTimeout(() => {
      onStateAppointment(appointment.id, newstate)
    }, 1000)
  }

  return (
    <div className='appointment-card'>
      <img
        className='appointment-card-image'
        src={!type
          ? appointment.doctor.image
          : appointment.patient.gender === 'MALE'
            ? 'https://res.cloudinary.com/dzmkilinu/image/upload/v1691739544/medical-site/avatar-male_kezpkj.svg'
            : 'https://res.cloudinary.com/dzmkilinu/image/upload/v1691739544/medical-site/avatar-female_erjtsk.svg'
        } />
      <div className='appointment-card-info'>
        {appointment.doctor.specialities.map((item, index) => {
          return <h3 className='specialty' key={index}> {item.speciality.name} </h3>
        })}
        <h3 className='name'> {type ? appointment.patient.user.fullName : `Dr. ${appointment.doctor.user.fullName}`} </h3>
        <label className='date'>
          <span><IoCalendarOutline size={18} /></span>
          {new Date(appointment.appointmentDataTime).toISOString().split('T')[0]}
        </label>
        <label className='hour'>
          <span><BiTime size={18} /></span>
          {new Date(appointment.appointmentDataTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </label>
        <Modal
          trigger={<label className='details'> Details <span><AiOutlineInfoCircle size={18} /></span></label>}
          className='details__modal'
        >
          <h3 className='details__modal-title'>Summary of the appointment</h3>
          <div className='details__modal-content'>
            <h3 className='title'>Patient</h3>
            <label className='subtitle'>
              <span><AiOutlineUser size={18} /></span>
              {appointment.patient.user.fullName}
            </label>
            <label className='subtitle_2' >
              {
                ` ${appointment.patient.gender} 
                 - ${new Date().getFullYear() - new Date(appointment.patient.birthDate).getFullYear()}`
              }
            </label>
            <h3 className='title'>Date of appointment</h3>
            <label className='subtitle'>
              <span><IoCalendarOutline size={18} /></span>
              {new Date(appointment.appointmentDataTime).toISOString().split('T')[0]}
            </label>
            <h3 className='title'>Hour of appointment</h3>
            <label className='subtitle'>
              <span ><BiTime size={18} /></span>
              {new Date(appointment.appointmentDataTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </label>
            <h3 className='title'>Hospital</h3>
            <label className='subtitle'>
              <span><IoLocationOutline size={18} /></span>
              {appointment.hospital}
            </label>
            <h3 className='title'>Specialty</h3>
            <label className='subtitle'>
              <span><LiaStethoscopeSolid size={20} /></span>
              {appointment.doctor.specialities.map((item) => {
                return item.speciality.name
              })}
            </label>
            <h3 className='title'>Doctor</h3>
            <label className='subtitle'>
              <span><FaUserDoctor size={18} /></span>
              {`Dr. ${appointment.doctor.user.fullName}`}
            </label>
            <h3 className='title'>Reason of consultation</h3>
            <p className='subtitle'>{appointment.reason}</p>
          </div>
          {
            appointment.status === 'PENDING' &&
            <div className='details__modal-buttons'>
              {options.map((option) => {
                return (
                  <Modal
                    key={option.id}
                    trigger={<a className={option.className}>{option.title}</a>}
                    className='modal__message'
                  >
                    <div className='modal__message--content'>
                      {option.icon}
                      {
                        !message &&
                        <>
                          <h3 className='title'>{option.message}</h3>
                          <a className='confirmation' onClick={() => handleStateAppointment(option.value)}> Yes </a>
                        </>
                      }
                      {
                        message && <h3 className='title'>Saved successfully</h3>
                      }
                    </div>
                  </Modal>
                )
              })}
            </div>
          }
        </Modal>
      </div>
    </div>
  )
}

export default AppointmentCard
