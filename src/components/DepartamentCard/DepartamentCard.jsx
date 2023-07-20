import React from 'react'
import './DepartamentCard.scss'

const DepartamentCard = ({ id, icon, title, information, link }) => {
  return (
    <div className='departament-card'>
        <i className='departament-card--icon'>{icon}</i>
        <h3>
          <a href={link}className='departament-card--title'>{title}</a>
        </h3>
        <p className='departament-card--information'>{information}</p>
        <a href={link}>Readmore → </a>
    </div>)
}
export default DepartamentCard
