/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { FaUserPlus, FaEdit, FaTrashAlt } from 'react-icons/fa'
import { FcSearch } from 'react-icons/fc'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import './Doctors.scss'

const Doctors = ({ doctorsData }) => {
  const headboard = ['Name', 'Email', 'Phone Number', 'Social Networks', 'Status', 'Actions']
  const filterData = doctorsData
  return (
    <div className='admin-doctors'>
      <div className='admin-doctors-header'>
        <FcSearch size={20} className='icon' />
        <input
          className='filterName'
          name='searchDoctor'
          type='text'
          placeholder='Escriba el nombre del doctor'
        />
        <a className='addButton'>
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
            {
              filterData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className='name'>
                      <img className='img' src={item.doctor.image} />
                      <div className='text'>
                        <h3>{`Dr. ${item.fullName}`}</h3>
                        {
                          item.doctor.specialities.map((item, index) => {
                            return (
                              <h3 key={index} style={{ color: '#BFC9CA' }}>{item.speciality.name}</h3>
                            )
                          })
                        }
                      </div>
                    </td>
                    <td className='email'>
                      {item.email}
                    </td>
                    <td className='phone'>
                      {item.doctor.phone}
                    </td>
                    <td className='social'>
                      <h3><BiLogoFacebook className='icon' />{item.doctor.facebook}</h3>
                      <h3><BiLogoInstagram className='icon' />{item.doctor.instagram}</h3>
                      <h3><BiLogoLinkedin className='icon' />{item.doctor.linkedin}</h3>
                      <h3><BiLogoTwitter className='icon' />{item.doctor.twitter}</h3>
                    </td>
                    <td className='status'>
                      {item.status
                        ? <h4 style={{ color: '#5F8D4E', backgroundColor: '#F4FFF3', textAlign: 'center' }}>Active</h4>
                        : <h4 style={{ color: '#5F8D4E', backgroundColor: '#F4FFF3', textAlign: 'center' }}>Inactive</h4>}
                    </td>
                    <td className='actions'>
                      <FaEdit className='icon' />
                      <FaTrashAlt className='icon' />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>
      </div >

    </div>
  )
}

export default Doctors
