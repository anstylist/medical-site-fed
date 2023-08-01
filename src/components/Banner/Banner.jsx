import React from 'react'
import './Banner.scss'

function Banner ({ title , subtitle }) {
  return (
   <div className='banner-container'>
      <div className='banner' >
        <h1 className='banner-h1'>{title}</h1>
        <h2 className='banner-h2'>{subtitle}</h2>
      </div>
   </div>
  )
}

export default Banner
