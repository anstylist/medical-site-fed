import React from 'react'
import './ChangePassword.scss'
import Jumbotron from '../../components/Jumbotron/Jumbotron'

function Forgot () {
  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Change Password'
    }
  ]
  return (
    <div className='change'>
      <Jumbotron
      pageTitle={'Change Password'}
      backgroundClassName="change__bg"
      breadcrumb={breadcrumb}
      />
      <div className='change__content'>
        <h1>Forgot Password</h1>
        <input type="text" name="Email" id="" placeholder='Enter your email'/>
        <button className='change__button'>Submit now</button>
      </div>
    </div>
  )
}

export default Forgot
