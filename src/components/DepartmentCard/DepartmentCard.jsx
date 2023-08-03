import React from 'react'
import './DepartmentCard.scss'

const DepartmentCard = ({ id, icon, title, information, link }) => {
  return (
    <div className='department-card'>
        <i className='department-card--icon'>{icon}</i>
        <h3>
          <a href={link}className='department-card--title'>{title}</a>
        </h3>
        <p className='department-card--information'>{information}</p>
        <a href={link}>Readmore → </a>
    </div>)
}
export default DepartmentCard
