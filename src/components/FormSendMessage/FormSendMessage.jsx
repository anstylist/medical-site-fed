import React, { useState } from 'react'
import './FormSendMessage.scss'
import { BiCheck } from 'react-icons/bi';

const FormSendMessage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    acceptTerms: true
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value

    console.log('--- AC - ', e.target.checked, formData)

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className='form-send-message'>
      <form onSubmit={handleSubmit} className='form-send-message__container'>
        <div className='div-1'>
          <div className='form-send-message__name'>
            <label htmlFor="name" className='form-send-message__label'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className='form-send-message__control'
              />
          </div>
          <div className='form-send-message__email'>
            <label htmlFor="email" className='form-send-message__label'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className='form-send-message__control'
              />
          </div>
        </div>
        <div className='div-2'>
          <div className='form-send-message__phone'>
            <label htmlFor="phone" className='form-send-message__label'>Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className='form-send-message__control'
              />
          </div>
          <div className='form-send-message__subject'>
            <label htmlFor="subject" className='form-send-message__label'>Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className='form-send-message__control'
              />
          </div>
        </div>
        <div className='form-send-message__message'>
          <label htmlFor="message" className='form-send-message__label'>Your message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className='form-send-message__control form-send-message__control--textarea'
          />
        </div>
        <div className='form-send-message__terms'>
          <label htmlFor="acceptTerms" className='form-send-message__label'>
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
              className='form-send-message__control-checkbox'
            />
            <div className='form-send-message__control-checkbox-icon-box'>
              {formData.acceptTerms && <BiCheck className='icon' />}
            </div>
            Accept terms and conditions and privacy policy.
          </label>
        </div>
        <div className='form-send-message__btn'>
          <button type="submit" className='form-send-message__button'>Send message</button>
        </div>
      </form>
    </section>
  )
}

export default FormSendMessage
