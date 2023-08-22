import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import axios from 'axios'
import Swal from 'sweetalert2'
import './Login.scss'
import 'sweetalert2/src/sweetalert2.scss'
import host from '../../services/host'
import { CgEnter } from 'react-icons/cg'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const hasRole = (user) => {
    const rolesMap = {
      admin: 'ADMIN',
      patient: 'PATIENT',
      doctor: 'DOCTOR',
      user: 'USER'
    }
    const role = rolesMap[user.admin ? 'admin' : user.patient ? 'patient' : user.doctor ? 'doctor' : 'user']
    return role
  }

  const handleLogin = async (event) => {
    setLoading(true)
    event.preventDefault()
    try {
      const { data } = await axios.post(`${host}/api/auth/login`, {
        email,
        password
      })
      const role = hasRole(data.profile)
      localStorage.setItem('fullName', data.profile.fullName)
      localStorage.setItem('email', data.profile.email)
      localStorage.setItem('status', data.profile.status)
      localStorage.setItem('token', data.token)
      localStorage.setItem('role', role)
      role === 'ADMIN' ? navigate('/admin') : navigate('/')
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.response.data,
        icon: 'error'
      })
    } finally {
      setLoading(false)
      setEmail('')
      setPassword('')
    }
  }

  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Login'
    }
  ]
  return (
    <div className="login">
      <Jumbotron
        pageTitle={'Login'}
        backgroundClassName="login__bg"
        breadcrumb={breadcrumb}
      />
      <div className="login-container">
        {
          loading &&
          <img
            src='https://res.cloudinary.com/dzmkilinu/image/upload/v1692693479/medical-site/loading_xcwewp.gif'
            style={{ width: '200px', height: '200px', textAlign: 'center' }}
          />
        }
        {
          !loading && <>
            <h2 className="login__title">Login</h2><div className="login__form">
              <form onSubmit={handleLogin}>
                <label htmlFor="email" className="login__label">Email</label>
                <input id='email' type="text" className="login__input" placeholder='Email' value={email} onChange={handleEmailChange} required />

                <label htmlFor="password" className="login__label">Password</label>
                <input id='password' type="password" className="login__input" placeholder='Password' value={password} onChange={handlePasswordChange} required />

                <div className="login__checkbox">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>

                <Link to="/change-password" className="login__forgot-password">Forgot password?</Link>
                <button type='submit' className="login__button">Login →</button>
              </form>

              <p className="login__register-now">
                Don't have an account? <a href="/register">Register now</a>
              </p>
            </div>
          </>
        }
      </div>

    </div>
  )
}

export default Login
