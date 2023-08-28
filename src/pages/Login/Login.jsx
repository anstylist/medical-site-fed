import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import Swal from 'sweetalert2'
import './Login.scss'
import 'sweetalert2/src/sweetalert2.scss'
import Loading from '../../components/Loading/Loading'
import { loginService } from '../../services/AuthService'
import { AuthContext } from '../../context/AuthContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { setAuthData } = useContext(AuthContext)

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const user = await loginService(email, password)

      if (user.profile.status) {
        // We update the context data with a new login
        setAuthData({
          fullName: user.profile.fullName,
          email: user.profile.email,
          status: user.profile.status,
          token: user.token,
          roles: user.profile.roles
        })
        user.profile?.roles?.includes('ADMIN') ? navigate('/admin') : navigate('/')
      } else {
        Swal.fire({
          title: 'Account deactivated!',
          text: 'Please contact the administrator for more information.',
          icon: 'warning'
        })
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: 'Error!',
        text: error,
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
        {loading && (
          <Loading />
        )}
        {!loading && (
          <>
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
        )}
      </div>

    </div>
  )
}

export default Login
