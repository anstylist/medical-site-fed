/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import { FaTrashAlt, FaPlus, FaUpload } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import './DoctorForm.scss'
import { getAllSpeciality } from '../../../services/Speciality'
import Swal from 'sweetalert2'
import Loading from '../../Loading/Loading'

const DoctorForm = ({ doctor, setDoctor, onCreateDoctor, setIsOpen, onUpdateDoctor, edit, setEdit }) => {
  const [AllSpecialities, setAllSpecialities] = useState([])
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState(doctor.image || null)
  const inputRef = useRef()

  useEffect(
    () => {
      fetchDataSpecialities()
    }
    , [])

  const fetchDataSpecialities = async () => {
    const fetchData = await getAllSpeciality()
    setAllSpecialities(fetchData)
  }

  const readFile = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => setImage(e.target.result)
    reader.readAsDataURL(file)
  }

  const handleChange = (event) => {
    setDoctor({ ...doctor, [event.target.name]: event.target.value })
  }

  const handleImageChange = (event) => {
    readFile(event.target.files[0])
    setDoctor({ ...doctor, [event.target.name]: event.target.files[0] })
  }

  const handleUploadClick = () => {
    inputRef.current?.click()
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
      edit ? await onUpdateDoctor() : await onCreateDoctor()
      Swal.fire(
        'Saved!',
        edit ? 'Doctor updated successfully' : 'Doctor created successfully',
        'success'
      )
    } catch (error) {
      Swal.fire(
        'Error!',
        error,
        'error'
      )
    } finally {
      resetDoctor()
      setIsOpen(false)
      setLoading(false)
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
    setEdit(false)
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
              disabled={!!edit}
            />
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              required
              value={doctor.email}
              onChange={handleChange}
              disabled={!!edit}
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              required
              value={doctor.password}
              onChange={handleChange}
              disabled={!!edit}
            />
            <h3>BASIC INFORMATION</h3>
            <div className='container_image'>
              {image && <img src={image} alt='imagen' className='image' />}
              {!image && <FaUserDoctor className='image' />}
              <a className='upload' onClick={handleUploadClick}>
                <FaUpload size={20} /> UPLOAD
              </a>
            </div>
            <input
              ref={inputRef}
              type='file'
              name='image'
              id='image'
              onChange={handleImageChange}
              style={{ display: 'none' }}
              accept='image/*'
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
              <button type='button' onClick={handleCancel} className='buttons-cancel'>Cancel</button>
              <button type='submit' className='buttons-save'>Save</button>
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
