import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import './Login.scss'

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = (event) => {
    event.preventDefault()

    // Reemplazar con lógica real de Backend
    if (username === 'demo' && password === 'password') {
      alert('Login successful!')
      // Aquí se pueden desarrollar acciones despues de que el login sea exitoso, e.x. redirect al dashboard
    } else {
      alert('Invalid username or password. Please try again.')
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
                <h2 className="login__title">Login</h2>
                <div className="login__form">
                    <form onSubmit={handleLogin}>
                        <label htmlFor="username" className="login__label">Username or email</label>
                        <input id='username' type="text" className="login__input" placeholder='Username or Email' value={username} onChange={handleUsernameChange} required/>

                        <label htmlFor="password" className="login__label">Password</label>
                        <input id='password' type="password" className="login__input" placeholder='Password' value={password} onChange={handlePasswordChange} required/>

                        <div className="login__checkbox">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>

                        <Link to="/forgot-password" className="login__forgot-password">Forgot password?</Link>

                        <button className="login__button">Login →</button>
                    </form>

                    <p className="login__register-now">
                        Don't have an account? <Link to="/register">Register now</Link>
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Login
