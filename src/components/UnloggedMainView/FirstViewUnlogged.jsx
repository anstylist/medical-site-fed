import React from 'react'
import { FaAmbulance, FaHandHoldingMedical } from 'react-icons/fa'
import './FirstViewUnlogged.scss'

const FirstViewUnlogged = () => {
  return (
    <div className="main-banner-area">
      <div className="main-banner-container">
        <span className="main-banner-container__span">Welcome to Mebid</span>
        <h1 className="main-banner-container__h1">
          We are by your side in any services
        </h1>
        <p className="main-banner-container__p">
          We provide all kinds of medical services to our patients according to
          their
          <br />
          daily needs starting from special conditions
        </p>
        <ul className="banner-list">
          <li className="banner-list__item">
            <FaAmbulance className="banner-list__icons" />
            <p className="banner-list__undertext">Urgent Care</p>
          </li>
          <li className="banner-list__item">
            <FaHandHoldingMedical className="banner-list__icons" />
            <p className="banner-list__undertext">Primary Care</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FirstViewUnlogged
