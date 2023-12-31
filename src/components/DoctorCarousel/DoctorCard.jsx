/* eslint-disable react/prop-types */
import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './DoctorCard.scss'

const socialIcon = {
  facebook: <BiLogoFacebook className='doctor-card__social-icon' />,
  instagram: <BiLogoInstagram className='doctor-card__social-icon' />,
  twitter: <BiLogoTwitter className='doctor-card__social-icon' />,
  linkedin: <BiLogoLinkedin className='doctor-card__social-icon' />
}

const DoctorCard = ({ id, name, specialities, image, socialLinks, email = '', phone = '', externalClass }) => {
  return (
    <section className={`doctor-card ${externalClass || ''}`}>
      <div className='doctor-card__pic'>
        <Link
          to='/doctor-details'
          className='doctor-card__doctor'
          aria-label={`Dr. ${name}'s details`}
        >
          <img
            className='doctor-card__doctor-img'
            src={image}
            alt={`Dr. ${name}'s picture`}
          />
        </Link>
        <ul className='doctor-card__social-list'>
          {socialLinks.map((socialLink) => (
            <li key={socialLink.id} className='doctor-card__social-icon-li'>
              <a href={socialLink.url} className='doctor-card__social-icon-link'>
                {socialIcon[socialLink.type]}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='doctor-card__id'>
        <h3 className='doctor-card__id-name'>Dr. {name}</h3>
        <p className='doctor-card__id-specialty'>
          {
            specialities.map((speciality, index) => {
              return <span key={index}>{speciality}</span>
            })
          }
        </p>
        {email && <p className='doctor-card__id-email'>{email}</p>}
        {phone && <p className='doctor-card__id-phone'>{phone}</p>}
      </div>
    </section>
  )
}

export default DoctorCard
