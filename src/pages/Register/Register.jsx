import React, { useState } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Register.scss'
import 'sweetalert2/src/sweetalert2.scss'
import { registerService } from '../../services/RegisterService'
import Loading from '../../components/Loading/Loading'

function Register() {
  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Register'
    }
  ]

  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const inputValue = type === 'checkbox' ? checked : value

    setUser({
      ...user,
      [name]: inputValue
    })
  }

  const handleRegister = async (event) => {
    setLoading(true)
    event.preventDefault()
    try {
      await registerService(user)
      Swal.fire({
        title: 'Success!',
        text: 'Registration Success',
        icon: 'success'
      })
      navigate('/login')
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error'
      })
    } finally {
      setLoading(false)
      setUser({
        fullName: '',
        email: '',
        password: ''
      })
    }
  }

  return (
    <div className="register">
      <Jumbotron
        pageTitle={'Register'}
        backgroundClassName="register__bg"
        breadcrumb={breadcrumb}
      />
      <div className="register-container">
        {loading && (
          <Loading />
        )}
        {!loading && (
          <>
            <h2 className="register__title">Register</h2>
            <div className="register__form">
              <form onSubmit={handleRegister}>
                <label htmlFor="fullName" className="register__label">Full Name</label>
                <input
                  id='fullName'
                  type="text"
                  className="register__input"
                  placeholder='Full Name'
                  name="fullName"
                  value={user.fullName}
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
                  value={user.email}
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
                  value={user.password}
                  onChange={handleChange}
                  required
                />

                <div className="register__checkbox">
                  <input
                    type="checkbox"
                    id="agree-terms"
                    name="agreeTerms"
                    required
                  />
                  <label htmlFor="agree-terms">I agree with the <Link to="/terms-of-service" className='agree-terms'>Terms & conditions</Link></label>
                </div>

                <button type="submit" className="register__button">Register now →</button>
              </form>
              <p className="register__login-now">
                Already have an account? <a href="/login" className='login-now-link'>Login</a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Register
