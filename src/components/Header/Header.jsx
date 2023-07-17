import React from 'react'
import './Header.scss'
import HeaderContact from './HeaderContact'
import MainMenu from './MainMenu'
import HeaderRight from './HeaderRight';

const urlLogo = 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393390/medical-site/logo_bcp977.png'

function Header () {
  return (
    <>
      <HeaderContact />
      <header className='header'>
        <section className='header__container'>
          <section className='header-section'>
            <img className="header-section__logo"
              src={urlLogo}
              alt="logo"
              aria-label='Logo Medical Site'
            />
          </section>
          <MainMenu />
          <HeaderRight/>
        </section>
      </header>
    </>
  )
}

export default Header
