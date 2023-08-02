import React from 'react'
import './WhyPeolple.scss'
import { BsFillCheckCircleFill } from 'react-icons/bs'

function WhyPeople () {
  return (
   <div className='people-container'>
      <span className='people-container-span'>Why people choose us</span>
      <h1 className='people-title'>The main reason for your choice is our service</h1>
      <p className='people-parrafo'>Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.
        Vivamus magna justo lacinia eget.</p>
      <p className='people-parrafo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. </p>
        <ul className='people-list'>
          <li>
            <i><BsFillCheckCircleFill className='check'/></i>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          </li>
          <li>
            <i><BsFillCheckCircleFill className='check'/></i>
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          </li>
          <li>
            <i><BsFillCheckCircleFill className='check'/></i>
            Donec sollicitudin molestie malesuada.
          </li>
        </ul>
   </div>
  )
}

export default WhyPeople
