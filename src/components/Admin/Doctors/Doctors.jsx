import React, { useEffect, useState } from 'react'
import { FaUserPlus, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { RxUpdate } from 'react-icons/rx'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import Loading from '../../Loading/Loading'
import Swal from 'sweetalert2'
import DoctorForm from './DoctorForm'
import { doctorAll } from '../../../services/AdminService'
import { updateUser } from '../../../services/UserService'
import { createDoctor, updateDoctor } from '../../../services/DoctorService'
import './Doctors.scss'

const Doctors = () => {
  const [filter, setFilter] = useState('')
  const [doctorsData, setDoctorsData] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, SetIsEdit] = useState(false)
  const [doctor, setDoctor] = useState(
    {
      id: '',
      fullName: '',
      email: '',
      password: '',
      image: null,
      phone: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: '',
      specialities: ['']
    })

  useEffect(
    () => {
      fetchData()
    }
    , [])

  const headboard = ['Name', 'Email', 'Phone Number', 'Social Networks', 'Status', 'Actions']
  const socialIcons = {
    linkedin: <BiLogoLinkedin size={18} />,
    twitter: <BiLogoTwitter size={18} />,
    instagram: <BiLogoInstagram size={18} />,
    facebook: <BiLogoFacebook size={18} />
  }

  const onCreateDoctor = async () => {
    try {
      const data = new FormData()
      const userData = {
        fullName: doctor.fullName,
        email: doctor.email,
        password: doctor.password
      }
      const doctorData = {
        phone: doctor.phone,
        facebook: doctor.facebook,
        twitter: doctor.twitter,
        linkedin: doctor.linkedin,
        instagram: doctor.instagram
      }
      const specialitiesNames = doctor.specialities
      const file = doctor.image

      data.append('userData', JSON.stringify(userData))
      data.append('doctorData', JSON.stringify(doctorData))
      data.append('specialitiesNames', JSON.stringify(specialitiesNames))
      data.append('image', file)
      const { data: { doctor: newDoctor } } = await createDoctor(data)
      const updateDoctorData = [...doctorsData, formatDoctorData(newDoctor)]
      setDoctorsData(updateDoctorData)
    } catch (error) {
      throw error.message
    }
  }

  const onUpdateDoctor = async () => {
    try {
      const data = new FormData()
      const doctorData = {
        phone: doctor.phone,
        facebook: doctor.facebook,
        twitter: doctor.twitter,
        linkedin: doctor.linkedin,
        instagram: doctor.instagram
      }
      const specialitiesNames = doctor.specialities
      const file = doctor.image
      data.append('doctorData', JSON.stringify(doctorData))
      data.append('specialitiesNames', JSON.stringify(specialitiesNames))
      data.append('image', file)

      await updateDoctor(doctor?.id, data)
      const updateData = doctorsData.map((item) => {
        return item.id === doctor.id ? { ...item, ...formatDoctorData(doctor, true) } : item
      })
      setDoctorsData(updateData)
      SetIsEdit(false)
    } catch (error) {
      throw error.message
    }
  }

  const formatDoctorData = (doctorData, isUpdate = false) => {
    const commonData = {
      id: isUpdate ? doctorData.id : doctorData.doctor.id,
      fullName: doctorData.fullName,
      email: doctorData.email,
      image: isUpdate ? doctorData.image : doctorData.doctor.image,
      phone: isUpdate ? doctorData.phone : doctorData.doctor.phone,
      status: isUpdate ? true : doctorData.status,
      specialities: isUpdate
        ? doctorData.specialities.map((item) => {
          return item
        })
        : doctorData.doctor.specialities.map((item) => item.speciality.name),
      socialLinks: [
        {
          type: 'facebook',
          url: isUpdate ? doctorData.facebook : doctorData.doctor.facebook
        },
        {
          type: 'twitter',
          url: isUpdate ? doctorData.twitter : doctorData.doctor.twitter
        },
        {
          type: 'linkedin',
          url: isUpdate ? doctorData.linkedin : doctorData.doctor.linkedin
        },
        {
          type: 'instagram',
          url: isUpdate ? doctorData.instagram : doctorData.doctor.instagram
        }
      ]
    }
    return commonData
  }

  const changeHandler = (event) => {
    setFilter(event.target.value)
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const doctorsAll = await doctorAll()
      setDoctorsData(doctorsAll)
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

  const updateStatus = async (email, status) => {
    const data = {
      status
    }
    await updateUser(email, data)

    const updateData = doctorsData.map((doctor) => {
      return doctor.email === email ? { ...doctor, status } : doctor
    })
    setDoctorsData(updateData)
  }

  const modalEditDoctor = (doctorEdit) => {
    SetIsEdit(true)
    setDoctor({
      id: doctorEdit.id,
      fullName: doctorEdit.fullName,
      email: doctorEdit.email,
      password: doctorEdit.password,
      image: doctorEdit.image,
      phone: doctorEdit.phone,
      facebook: doctorEdit.socialLinks.filter((social) => { return social.type === 'facebook' })[0].url,
      twitter: doctorEdit.socialLinks.filter((social) => { return social.type === 'twitter' })[0].url,
      linkedin: doctorEdit.socialLinks.filter((social) => { return social.type === 'linkedin' })[0].url,
      instagram: doctorEdit.socialLinks.filter((social) => { return social.type === 'instagram' })[0].url,
      specialities: doctorEdit.specialities
    })
    setIsOpen(true)
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await updateStatus(email, status)
          await Swal.fire(
            status ? 'Activated!' : 'Deactivated!',
            status ? 'Account successfully activated' : 'Account was successfully deactivated',
            'success'
          )
        } catch (error) {
          await Swal.fire(
            'Error!',
            error,
            'warning'
          )
        }
      }
    })
  }

  const nextPage = () => {
    if (currentPage + 5 < filterData.length) {
      setCurrentPage(currentPage + 5)
    }
  }

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5)
    }
  }

  const filterData = doctorsData.filter((item) => { return item.fullName.toUpperCase().includes(filter.toUpperCase()) })

  return (
    <>
      <div className='admin-doctors'>
        {loading && (
          <Loading />
        )}
        {!loading && (
          <>
            <h2 className='title'> List of doctors </h2>
            <h2 className='subtitle'>{`${doctorsData.length} registered doctors`}</h2>
            <div className='admin-doctors-header'>
              <FaMagnifyingGlass size={15} className='icon' />
              <input
                className='filterName'
                name='searchDoctor'
                type='text'
                placeholder='Doctor name to search'
                onChange={changeHandler} />

              <a className='addButton' onClick={() => setIsOpen(true)}>
                <FaUserPlus size={20} /> Add new doctor
              </a>
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
                          <img className='img' src={doctor.image} alt='ImageProfile' />
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
                            ? <h4 style={{ color: '#5F8D4E', backgroundColor: '#E9F7EF', textAlign: 'center', borderRadius: '5px' }}>Active</h4>
                            : <h4 style={{ color: '#F64E60', backgroundColor: '#FDEDEC', textAlign: 'center', borderRadius: '5px' }}>Inactive</h4>}
                        </td>
                        <td className='actions'>
                          <FaEdit className='icon' onClick={() => modalEditDoctor(doctor)} />
                          {
                            doctor.status
                              ? <FaTrashAlt className='icon' onClick={() => modalUpdateStatus(doctor.email, false)} />
                              : <RxUpdate className='icon' onClick={() => modalUpdateStatus(doctor.email, true)} />

                          }
                        </td>
                      </tr>
                    )
                  }).slice(currentPage, currentPage + 5)}
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
        )}
      </div>
      {
        isOpen &&
        <DoctorForm
          doctor={doctor}
          setDoctor={setDoctor}
          onCreateDoctor={onCreateDoctor}
          setIsOpen={setIsOpen}
          onUpdateDoctor={onUpdateDoctor}
          edit={isEdit}
          setEdit={SetIsEdit}
        />
      }
    </>
  )
}

export default Doctors
