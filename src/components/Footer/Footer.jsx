import React from 'react'
import { BsLinkedin, BsGithub, BsArrowRight } from 'react-icons/bs'
import { dataDepartament, dataLink } from '../data'
import './Footer.scss'

function Footer () {
  const departaments = [...dataDepartament()].slice(0, 6)
  const links = dataLink()

  return (
    <footer className='footer'>
      <div className='footer__section__container'>
        <section className='section'>
          <h3 className='section-title'>About</h3>
          <p className='section-description'>Our team has created a web system that allows you to book medical appointments and buy medical products.
            Designed to be intuitive and secure, our solution provides convenience and ease of use for users, development team :
            </p>
            <ul>
              <li className='section-subtitle'>Andry Peña</li>
              <div className='section-redes'>
                <a href='#'><BsLinkedin size={20} className='section-redes-option'/></a>
                <a href='#'><BsGithub size={20} className='section-redes-option'/></a>
              </div>
              <li className='section-subtitle'>Juan Villegas</li>
              <div className='section-redes'>
                <a href='#'><BsLinkedin size={20} className='section-redes-option'/></a>
                <a href='#'><BsGithub size={20} className='section-redes-option'/></a>
              </div>
              <li className='section-subtitle'>Carlos Mendoza</li>
              <div className='section-redes'>
                <a href='#'><BsLinkedin size={20} className='section-redes-option'/></a>
                <a href='#'><BsGithub size={20} className='section-redes-option'/></a>
              </div>
              <li className='section-subtitle'>Erick Carrasco</li>
              <div className='section-redes'>
                <a href='#'><BsLinkedin size={20} className='section-redes-option'/></a>
                <a href='#'><BsGithub size={20} className='section-redes-option'/></a>
              </div>
            </ul>
        </section>
        <section className='section'>
        <h3 className='section-title'>Our departaments</h3>
          <ul>
            {departaments.map((item) => {
              return (
                <li key={item.id} className='section-subtitle'>
                <a href={item.link}>{item.name}</a>
                </li>)
            })}
          </ul>
        </section>
        <section className='section'>
        <h3 className='section-title'>Useful link</h3>
          <ul>
            {links.map((item) => {
              return (
                <li key={item.id} className='section-subtitle'>
                <a href={item.link}>{item.name}</a>
                </li>)
            })}
          </ul>
        </section>
        <section className='section'>
          <h3 className='section-title'>Newsletter</h3>
          <p className='section-description'>Sign up now for weekly news and updates</p>
          <div className='section-input'>
            <input type='text' className='section-input-email'placeholder='Email addres'></input>
            <button className='section-input-button'><BsArrowRight size={20}/></button>
          </div>
        </section>
      </div>
      <div className='footer__copyright__container'>
        <p>© Team developed system - 2023</p>
      </div>
    </footer>
  )
}

export default Footer

