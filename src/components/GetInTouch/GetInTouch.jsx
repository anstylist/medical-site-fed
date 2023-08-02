import React from 'react'
import { BiLogoFacebook, BiMap, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin, BiPhone, BiEnvelope } from 'react-icons/bi'
import './GetInTouch.scss'

function GetInTouch() {
  return (
    <section className='get-in-touch'>
      <section className='get-in-touch__container'>
        <h3 className='get-in-touch__title'>
          Get in touch with us
        </h3>
        <p className='get-in-touch__text'>
          Viamus suscipit tortor eget felis porttitor volutpat cras ultricies ligula sed magna dictum porta lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>
      </section>
      <ul className='get-in-touch__info-list'>
        <li className='get-in-touch__info-list-item'>
          <i className='get-in-touch__i'>
            <BiPhone className='get-in-touch__icon' />
          </i>
          <a href="tel:(04) 0800 6655" className='get-in-touch__link'>
            (04) 0800 6655
          </a>
        </li>
        <li className='get-in-touch__info-list-item'>
          <i className='get-in-touch__i'>
            <BiEnvelope className='get-in-touch__icon' />
          </i>
          <a href="mailto:hello@mebid.com" className='get-in-touch__link'>
            hello@mebid.com
          </a>
        </li>
        <li className='get-in-touch__info-list-item'>
          <i className='get-in-touch__i'>
            <BiMap className='get-in-touch__icon' />
          </i>
          <h3 className='get-in-touch__location-text'>
            24 Newport road, carlton IP19
          </h3>
        </li>
      </ul>
      <ul className='get-in-touch__social'>
        <li className='get-in-touch__social-list'>
          <BiLogoFacebook className='get-in-touch__social-icon'/>
        </li>
        <li>
          <BiLogoInstagram className='get-in-touch__social-icon' />
        </li>
        <li>
          <BiLogoTwitter className='get-in-touch__social-icon'/>
        </li>
        <li>
          <BiLogoLinkedin className='get-in-touch__social-icon'/>
        </li>
      </ul>
    </section>
  )
}

export default GetInTouch
