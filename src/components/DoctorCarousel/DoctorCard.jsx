/* eslint-disable react/prop-types */
import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import './DoctorCard.scss'

const socialIcon = {
  facebook: <BiLogoFacebook className='doctor-card__social-icon'/>,
  instagram: <BiLogoInstagram className='doctor-card__social-icon' />,
  twitter: <BiLogoTwitter className='doctor-card__social-icon'/>,
  linkedin: <BiLogoLinkedin className='doctor-card__social-icon'/>
}

const DoctorCard = ({ id, name, specialty, image, socialLinks, externalClass }) => {
  return (
    <section className={`doctor-card ${externalClass || ''}`}>
      <div className='doctor-card__pic'>
        <a
          className='doctor-card__doctor'
          href={`/doctors/${id}`}
          aria-label={`Dr. ${name}'s details`}
        >
          <img
            className='doctor-card__doctor-img'
            src={image}
            alt={`Dr. ${name}'s picture`}
          />
        </a>
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
        <p className='doctor-card__id-specialty'>{specialty}</p>
      </div>
    </section>
  )
}

export default DoctorCard
