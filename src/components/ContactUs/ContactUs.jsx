import React from 'react'
import './ContactUs.scss'

function ContactUs () {
  return (
    <div className='Contact__Body'>
        <div className='Contact__Container'>
            <div className='Contact__Logo'>
                <img src="https://templates.envytheme.com/mebid/default/assets/images/logo-2.png" alt="logo" />
            </div>
            <div className='Contact__Text'>
                <h3 className='Contact__Text__Content'>Need more information please contact us or book an appointment</h3>
            </div>
            <div className='Contact__Botton'>
                <button>Contact us → </button>
            </div>
        </div>
    </div>
  )
}

export default ContactUs