import React from 'react'
import './MainBanner.scss'

// eslint-disable-next-line react/prop-types
const PageBanner = ({ pageTitle }) => {
  return (
    <div className="page-banner">
      <h1 className="page-banner__title">Doctors details</h1>
      <div className="page-banner__nav">
        <span>Home</span>
        <span className="page-banner__nav-separator"> / </span>
        <span>Doctor details</span>
      </div>
      <div className="page-banner__bg"></div>
    </div>
  )
}

export default PageBanner
