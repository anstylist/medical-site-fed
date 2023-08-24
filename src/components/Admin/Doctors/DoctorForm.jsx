/* eslint-disable react/prop-types */
import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import './DoctorForm.scss'

const DoctorForm = ({ model, setModel }) => {
  const changeHandler = (event) => {
    setModel({ ...model, [event.target.name]: event.target.value })
  }
  return (
    <div className='doctor-form'>
      <form>
        <h3>USER INFORMATION</h3>
        <label htmlFor='fullName'>Full Name</label>
        <input
          type='text'
          name='fullName'
          id='fullName'
          value={model.fullName}
          onChange={changeHandler}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          value={model.email}
          onChange={changeHandler}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={model.password}
          onChange={changeHandler}
        />
        <h3>BASIC INFORMATION</h3>
        <label htmlFor='file'>Image</label>
        <input
          type='file'
          name='image'
          id='image'
          value={model.image}
          placeholder='Enter your username'
          onChange={changeHandler}
        />
        <label htmlFor='file'>Phone</label>
        <input
          type='number'
          name='phone'
          id='phone'
          value={model.phone}
          onChange={changeHandler}
        />
        <label htmlFor='facebook'>Social Networks</label>
        <BiLogoFacebook size={25} className='iconSocial' />
        <input
          style={{ paddingLeft: '3rem' }}
          type='text'
          name='facebook'
          id='facebook'
          value={model.facebook}
          placeholder='Enter your username'
          onChange={changeHandler}
        />
        <BiLogoLinkedin size={25} className='iconSocial' />
        <input
          style={{ paddingLeft: '3rem' }}
          type='text'
          name='linkedin'
          id='linkedin'
          value={model.linkedin}
          placeholder='Enter your username'
          onChange={changeHandler}
        />
        <BiLogoTwitter size={25} className='iconSocial' />
        <input
          style={{ paddingLeft: '3rem' }}
          type='text'
          name='twitter'
          id='twitter'
          value={model.twitter}
          placeholder='Enter your username'
          onChange={changeHandler}
        />
        <BiLogoInstagram size={25} className='iconSocial' />
        <input
          style={{ paddingLeft: '3rem' }}
          type='text'
          name='instagram'
          id='instagram'
          value={model.instagram}
          placeholder='Enter your username'
          onChange={changeHandler}
        />

      </form>

    </div>
  )
}

export default DoctorForm
