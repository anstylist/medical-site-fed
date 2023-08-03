import React from 'react'
import './Forgot.scss'
import Jumbotron from '../../components/Jumbotron/Jumbotron'

function Forgot () {
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
        <input type="text" name="Email" id="" placeholder='Enter your email'/>
        <a href="">Submit now</a>
      </div>
    </div>
  )
}

export default Forgot
