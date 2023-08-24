import React from 'react'
import { FaAmbulance, FaHandHoldingMedical } from 'react-icons/fa'
import './FirstViewUnlogged.scss'

const FirstViewUnlogged = () => {
  return (
    <div className="main-banner-area-unlog">
      <div className="main-banner-container-unlog">
        <span className="main-banner-container__span-unlog">Welcome to Mebid</span>
        <h1 className="main-banner-container__h1-unlog">
          We are by your side in any services
        </h1>
        <p className="main-banner-container__p-unlog">
          We provide all kinds of medical services to our patients according to
          their
          <br />
          daily needs starting from special conditions
        </p>
        <ul className="banner-list-unlog">
          <li className="banner-list__item-unlog">
            <FaAmbulance className="banner-list__icons-unlog" />
            <p className="banner-list__undertext-unlog">Urgent Care</p>
          </li>
          <li className="banner-list__item-unlog">
            <FaHandHoldingMedical className="banner-list__icons-unlog" />
            <p className="banner-list__undertext-unlog-unlog">Primary Care</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FirstViewUnlogged
