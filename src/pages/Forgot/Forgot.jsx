import React, { useState } from 'react'
import './Forgot.scss'
import { http } from '../../services/http'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { hostDeploy } from '../../services/host'

function Forgot () {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await http.post('/auth/forgot-password', { email })
      setMessage(response.data.message)

      const templateParams = {
        to_name: response.fullName,
        to_email: email,
        reset_link: `${hostDeploy}/reset-password?token=${response.data.token}`
      }

      const serviceId = 'service_2rz54gq'
      const templateId = 'template_yi35hmm'
      const userId = 'wolwL4XHVd6GZeMxQ'

      emailjs.send(serviceId, templateId, templateParams, userId)
      Swal.fire({
        title: 'Email Sent',
        text: 'An email has been sent to reset your password.',
        icon: 'success',
        confirmButtonText: 'Got It'
      })
    } catch (error) {
      setMessage('An error occurred.')

      Swal.fire('Error!', 'An error occurred.', 'error')
    }
  }

  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Forgot Password'
    }
  ]
  return (
    <div className='forgot'>
      <Jumbotron
      pageTitle={'Forgot Password'}
      backgroundClassName="forgot__bg"
      breadcrumb={breadcrumb}
      />
      <div className='forgot__content'>
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className='submit__button' type="submit">Request Reset</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Forgot
