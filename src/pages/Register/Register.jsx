import React, { useState } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import './Register.scss'

function Register () {
  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Register'
    }
  ]

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agreeTerms: false
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const inputValue = type === 'checkbox' ? checked : value

    setFormData({
      ...formData,
      [name]: inputValue
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Here, we perform the actual registration process using the formData.
    // For now, I will just log the formData to the console.
    console.log(formData)

    // Reset the form after submission (optional)
    setFormData({
      username: '',
      email: '',
      password: '',
      agreeTerms: false
    })
  }

  return (
    <div className="register">
      <Jumbotron
        pageTitle={'Register'}
        backgroundClassName="register__bg"
        breadcrumb={breadcrumb}
      />
      <div className="register-container">
        <h2 className="register__title">Register</h2>
        <div className="register__form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="register__label">Username</label>
            <input
              id='username'
              type="text"
              className="register__input"
              placeholder='Username'
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="email" className="register__label">Email</label>
            <input
              id='email'
              type="email"
              className="register__input"
              placeholder='Email'
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password" className="register__label">Password</label>
            <input
              id='password'
              type="password"
              className="register__input"
              placeholder='Password'
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="register__checkbox">
              <input
                type="checkbox"
                id="agree-terms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="agree-terms">I agree with the <a href='/terms' className='agree-terms'>Terms & conditions</a></label>
            </div>

            <button type="submit" className="register__button">Register now →</button>
          </form>
          <p className="register__login-now">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
