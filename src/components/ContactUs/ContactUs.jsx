import React from 'react'
import './ContactUs.scss'
import { HiArrowNarrowRight } from "react-icons/hi";
function ContactUs () {
  return (
    <div className='Contact__Body'>
        <div className='Contact__Container'>
            <div className='Contact__Logo'>
                <img src="https://res.cloudinary.com/dzmkilinu/image/upload/v1689393389/medical-site/logo-2_zmadii.png" alt="logo" />
            </div>
            <div className='Contact__Text'>
                <h3 className='Contact__Text__Content'>Need more information please contact us or book an appointment</h3>
            </div>
            <a href='' className='Contact__Botton hvr-shutter-out-vertical'>
                Contact us
                <HiArrowNarrowRight className= 'Contact__Botton__Icon'/>
            </a>

        </div>
    </div>
  )
}

export default ContactUs