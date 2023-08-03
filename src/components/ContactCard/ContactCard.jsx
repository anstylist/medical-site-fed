import React from 'react'
import { BiPhone } from 'react-icons/bi'
import './ContactCard.scss'


function ContactCard ({text, number}) {
  return (
    <section className='contact-card'>
      <header className='contact-card__header'>
        <h3 className='contact-card__title'>{text}</h3>
      </header>
      <div className='contact-card__phone-box'>
        <i className='contact-card__icon-box'>
          <BiPhone className='contact-card__icon'/>
        </i>
        <a href={`tel:${number}`} className='contact-card__number'>
          {number}
        </a>
      </div>
    </section>
  )
}

export default ContactCard
