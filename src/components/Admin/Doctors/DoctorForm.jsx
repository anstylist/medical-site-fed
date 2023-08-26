/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { FaTrashAlt, FaPlus } from 'react-icons/fa'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import './DoctorForm.scss'
import { getAllSpeciality } from '../../../services/Speciality'
import Swal from 'sweetalert2'
import Loading from '../../Loading/Loading'

const DoctorForm = ({ doctor, setDoctor, onCreateDoctor, setIsOpen }) => {
  const [AllSpecialities, setAllSpecialities] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(
    () => {
      fetchDataSpecialities()
    }
    , [])

  const fetchDataSpecialities = async () => {
    const fetchData = await getAllSpeciality()
    setAllSpecialities(fetchData)
  }

  const handleChange = (event) => {
    setDoctor({ ...doctor, [event.target.name]: event.target.value })
  }

  const handleSpecialityChange = (index, event) => {
    const newSpecialities = [...doctor.specialities]
    newSpecialities[index] = event.target.value
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      specialities: newSpecialities
    }))
  }

  const addSpecialitySelector = () => {
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      specialities: [...prevDoctor.specialities, '']
    }))
  }

  const removeSpecialitySelector = (index) => {
    const newSpecialities = [...doctor.specialities]
    newSpecialities.splice(index, 1)
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      specialities: newSpecialities
    }))
  }
  const resetDoctor = () => {
    setDoctor({
      phone: '',
      fullName: '',
      email: '',
      password: '',
      image: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: '',
      specialities: ['']
    })
  }
  const handleSubmit = async (event) => {
    setLoading(true)
    try {
      event.preventDefault()
      await onCreateDoctor()
      resetDoctor()
      setIsOpen(false)
      setLoading(false)
      Swal.fire(
        'Saved!',
        'Doctor created successfully',
        'success'
      )
    } catch (error) {
      resetDoctor()
      setIsOpen(false)
      setLoading(false)
      Swal.fire(
        'Error!',
        error,
        'error'
      )
    }
  }

  const handleCancel = () => {
    setDoctor({
      phone: '',
      fullName: '',
      email: '',
      password: '',
      image: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: '',
      specialities: ['']
    })
    setIsOpen(false)
  }

  return (
    <div className='doctor-form'>
      <form onSubmit={handleSubmit} >
        {
          !loading &&
          (<>
            <h3>USER INFORMATION</h3>
            <label htmlFor='fullName'>Full Name</label>
            <input
              type='text'
              name='fullName'
              id='fullName'
              required
              value={doctor.fullName}
              onChange={handleChange}
            />
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              required
              value={doctor.email}
              onChange={handleChange}
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              required
              value={doctor.password}
              onChange={handleChange}
            />
            <h3>BASIC INFORMATION</h3>
            <label htmlFor='file'>Image</label>
            <input
              // type='file'
              type='text'
              name='image'
              id='image'
              required
              value={doctor.image}
              onChange={handleChange}
            />
            <label htmlFor='file'>Phone</label>
            <input
              type='number'
              name='phone'
              id='phone'
              required
              value={doctor.phone}
              onChange={handleChange}
            />
            <h4 style={{ marginTop: '1rem' }}>Specialities</h4>
            {
              doctor.specialities.map((speciality, index) => {
                return (
                  <div
                    className='speciality'
                    key={index}>
                    <select
                      name={speciality}
                      id={speciality}
                      value={speciality}
                      required
                      onChange={(e) => handleSpecialityChange(index, e)}
                    >
                      <option value=''>-- Select Speciality --</option>
                      {AllSpecialities.map((item) => {
                        return (
                          <option key={item.id} value={item.name}>{item.name}</option>
                        )
                      })}
                    </select>
                    <a onClick={() => removeSpecialitySelector(index)} className='delete'>
                      <FaTrashAlt size={18} />
                    </a>
                  </div>
                )
              })
            }
            <a onClick={addSpecialitySelector} className='add'>
              <FaPlus size={15} style={{ width: 'auto' }} />
              Add speciality
            </a>
            <label htmlFor='facebook'>Social Networks</label>
            <BiLogoFacebook size={25} className='iconSocial' />
            <input
              style={{ paddingLeft: '3rem' }}
              type='text'
              name='facebook'
              id='facebook'
              value={doctor.facebook}
              placeholder='Enter your username'
              onChange={handleChange}
            />
            <BiLogoLinkedin size={25} className='iconSocial' />
            <input
              style={{ paddingLeft: '3rem' }}
              type='text'
              name='linkedin'
              id='linkedin'
              value={doctor.linkedin}
              placeholder='Enter your username'
              onChange={handleChange}
            />
            <BiLogoTwitter size={25} className='iconSocial' />
            <input
              style={{ paddingLeft: '3rem' }}
              type='text'
              name='twitter'
              id='twitter'
              value={doctor.twitter}
              placeholder='Enter your username'
              onChange={handleChange}
            />
            <BiLogoInstagram size={25} className='iconSocial' />
            <input
              style={{ paddingLeft: '3rem' }}
              type='text'
              name='instagram'
              id='instagram'
              value={doctor.instagram}
              placeholder='Enter your username'
              onChange={handleChange}
            />
            <div className='buttons'>
              <button type='submit' className='buttons-save'>Save</button>
              <button type='button' onClick={handleCancel} className='buttons-cancel'>Cancel</button>
            </div>
          </>)
        }
        {
          loading && <Loading />
        }
      </form>
    </div>
  )
}

export default DoctorForm
