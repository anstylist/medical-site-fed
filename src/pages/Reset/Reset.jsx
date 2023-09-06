import React, { useState } from 'react'
import { http } from '../../services/http'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import './Reset.scss'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import { local } from '../../services/host'

function Reset () {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const token = searchParams.get('token')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.')
      return
    }
    try {
      const response = await http.patch(`${local}/auth/reset-password/${token}`, { newPassword })

      if (response.status === 200) {
        Swal.fire({
          title: 'Password Reset Successful',
          text: 'Your password has been changed successfully.',
          icon: 'success',
          confirmButtonText: 'Go to Login'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/login'
          }
        })
      } else {
        setMessage('Password reset failed.')
      }
    } catch (error) {
      setMessage('An error occurred while resetting the password.')
      Swal.fire('Error!', error.message || 'An error occurred.', 'error')
    }
  }

  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Reset Password'
    }
  ]

  return (
    <div className="reset-password">
      <Jumbotron
        pageTitle={'Reset Password'}
        backgroundClassName="reset-password__bg"
        breadcrumb={breadcrumb}
      />
      <div className="reset-password__content">
        <h1 className="reset-password__title">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="reset-password__form-group">
            <label className="reset-password__label">New Password:</label>
            <input
              className="reset-password__input"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="reset-password__form-group">
            <label className="reset-password__label">Confirm Password:</label>
            <input
              className="reset-password__input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="reset-password__submit-button" type="submit">
            Reset Password
          </button>
        </form>
        <p className="reset-password__message">
          {message}
        </p>
      </div>
    </div>
  )
}

export default Reset
