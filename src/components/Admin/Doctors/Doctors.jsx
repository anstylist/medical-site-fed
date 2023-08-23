import React, { useEffect, useState } from 'react'
import { FaUserPlus, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { FcSearch } from 'react-icons/fc'
import { RxUpdate } from 'react-icons/rx'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import './Doctors.scss'
import axios from 'axios'
import host from '../../../services/host'
import Loading from '../../Loading/Loading'
import Swal from 'sweetalert2'
import Modal from '../../Modal/Modal'
import DoctorForm from './DoctorForm'

const Doctors = () => {
  const [filter, setFilter] = useState('')
  const [doctorsData, setDoctorsData] = useState([])
  const [loading, setLoading] = useState(false)
  const [doctor, setDoctor] = useState(
    {
      fullName: '',
      email: '',
      password: '',
      image: '',
      phone: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: '',
      specialities: []
    })
  const accessToken = localStorage.getItem('token')
  const headboard = ['Name', 'Email', 'Phone Number', 'Social Networks', 'Status', 'Actions']
  const socialIcons = {
    linkedin: <BiLogoLinkedin size={18} />,
    twitter: <BiLogoTwitter size={18} />,
    instagram: <BiLogoInstagram size={18} />,
    facebook: <BiLogoFacebook size={18} />
  }

  useEffect(
    () => {
      fetchData()
    }
    , [])

  const changeHandler = (event) => {
    setFilter(event.target.value)
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
      const { data } = await axios.get(`${host}/api/doctors/all`, config)

      setDoctorsData(data)
      console.log(data)
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (email, status) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
      const data = {
        status
      }
      const response = await axios.patch(`${host}/api/users/${email}`, data, config)
      const updateData = doctorsData.map((doctor) => {
        return doctor.email === email ? { ...doctor, status } : doctor
      })
      setDoctorsData(updateData)

      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }

  const modalUpdateStatus = (email, status) => {
    Swal.fire({
      title: 'Are you sure?',
      text: status ? "You will activate this user's account!" : "you will deactivate this user's account",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: status ? 'Yes, activate it!' : 'Yes, deactivate it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          status ? 'Activated!' : 'Deactivated!',
          status ? 'Account successfully activated' : 'Account was successfully deactivated',
          'success'
        )
        updateStatus(email, status)
      }
    })
  }

  const filterData = doctorsData.filter((item) => { return item.fullName.toUpperCase().includes(filter.toUpperCase()) })
  return (
    <div className='admin-doctors'>
      {loading && (
        <Loading />
      )}
      {!loading && (
        <>
          <h2 className='title'> List of doctors </h2><h2 className='subtitle'>{`${doctorsData.length} registered doctors`}</h2>
          <div className='admin-doctors-header'>
            <FcSearch size={20} className='icon' />
            <input
              className='filterName'
              name='searchDoctor'
              type='text'
              placeholder='Doctor name to search'
              onChange={changeHandler} />
            <Modal
              trigger=
              {
                <a className='addButton'>
                  <FaUserPlus size={20} /> Add new doctor
                </a>
              }
              className='modal_addUsers'
            >
              <>
                <h3 className='modal_addUsers-title'> New User</h3>
                <DoctorForm model={doctor} setModel={setDoctor} />
              </>
            </Modal>

          </div>
          <div className='admin-doctors-content'>
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
                {filterData.map((doctor, index) => {
                  return (
                    <tr key={index}>
                      <td className='card'>
                        <img className='img' src={doctor.image} />
                        <div className='name'>
                          <h3>{`Dr. ${doctor.fullName}`}</h3>
                          {doctor.specialities.map((speciality, index) => {
                            return (
                              <h3 key={index} style={{ color: '#BFC9CA' }}>{speciality}</h3>
                            )
                          })}
                        </div>
                      </td>
                      <td className='text'>
                        {doctor.email}
                      </td>
                      <td className='text'>
                        {doctor.phone}
                      </td>
                      <td>
                        {doctor.socialLinks.map((socialNetwork, index) => {
                          return socialNetwork.url && (
                            <h4 className='social' key={index}>
                              {socialIcons[socialNetwork.type]}/{socialNetwork.url.split('/')[3]}
                            </h4>
                          )
                        })}
                      </td>
                      <td className='status'>
                        {doctor.status
                          ? <h4 style={{ color: '#5F8D4E', backgroundColor: '#F4FFF3', textAlign: 'center', borderRadius: '5px' }}>Active</h4>
                          : <h4 style={{ color: '#F64E60', backgroundColor: '#FDEDEC', textAlign: 'center', borderRadius: '5px' }}>Inactive</h4>}
                      </td>
                      <td className='actions'>
                        <FaEdit className='icon' />
                        {
                          doctor.status
                            ? <FaTrashAlt className='icon' onClick={() => modalUpdateStatus(doctor.email, false)} />
                            : <RxUpdate className='icon' onClick={() => modalUpdateStatus(doctor.email, true)} />

                        }
                      </td>
                    </tr>
                  )
                })}
              </tbody>

            </table>
          </div>
        </>
      )}

    </div>
  )
}

export default Doctors
