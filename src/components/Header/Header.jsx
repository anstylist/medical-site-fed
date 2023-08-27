import React, { useState } from 'react'
import './Header.scss'
import HeaderContact from './HeaderContact'
import MainMenu from './MainMenu'
import HeaderRight from './HeaderRight'
import { Link } from 'react-router-dom'

const urlLogo = 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393390/medical-site/logo_bcp977.png'
const RIGHT_MENU = 'RIGHT_MENU'
const MAIN_MENU = 'MAIN_MENU'

function Header () {
  const [openMenu, setOpenMenu] = useState(null)

  return (
    <>
      <HeaderContact />
      <header className='header'>
        <section className='header__container'>
          <section className='header__item header-section'>
            <Link to="/">
              <img className="header-section__logo"
                src={urlLogo}
                alt="logo"
                aria-label='Logo Medical Site'
              />
            </Link>
          </section>
          <MainMenu
            onMenuOpen={() => setOpenMenu(MAIN_MENU)}
            mustHideMenu={openMenu !== MAIN_MENU}
          />
          <HeaderRight
            onMenuOpen={() => setOpenMenu(RIGHT_MENU)}
            mustHideMenu={openMenu !== RIGHT_MENU}
          />
        </section>
      </header>
    </>
  )
}

export default Header
