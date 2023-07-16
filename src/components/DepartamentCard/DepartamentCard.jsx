import React from 'react'
import './DepartamentCard.scss'

const DepartamentCard = ({ id, icon, title, information }) => {
  return (
    <div className='departament-card'>
        <i className='departament-card--icon'>{icon}</i>
        <h3>
          <a className='departament-card--title'>{title}</a>
        </h3>
        <p className='departament-card--information'>{information}</p>
        <a>Readmore → </a>
    </div>)
}
export default DepartamentCard
