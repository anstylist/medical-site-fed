import React, { useState } from 'react'
import { FaUserMd, FaChevronDown } from 'react-icons/fa'
import { MdAddCall, MdOutlinePhoneInTalk } from 'react-icons/md'
import { GiWorld } from 'react-icons/gi'
import { CiSearch } from 'react-icons/ci'
import './HeaderContact.scss'

const flagEnglishURL = 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393389/medical-site/uk_ozjsir.png'
const flagChinaURL = 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393390/medical-site/china_io5yte.png'
const flagArabianURL = 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393390/medical-site/uae_n9tglh.png'

function HeaderContact () {
  const [isLangMenuVisible, setIsLangMenuVisible] = useState(false)
  const [language, setLanguage] = useState('English')

  const handleLangMenuClick = () => {
    setIsLangMenuVisible((isVisible) => !isVisible)
  }

  const setCurrentLanguage = (newLanguage) => {
    setLanguage(newLanguage)
    handleLangMenuClick()
  }

  return (
    <section className='header-contact'>
      <section className='header-contact__container'>
        <nav className='header-contact__left'>
          <ul className='header-contact__list'>
            <li className='header-contact__list-item'>
              <a className='header-contact__list-item--link' href="#">
                <MdAddCall className='header-contact__list-item--icon'/>
                Emergency 24 hours
              </a>
            </li>
            <li className='header-contact__list-item'>
              <a className='header-contact__list-item--link' href="#">
                <FaUserMd className='header-contact__list-item--icon' />
                Patients & visitors
              </a>
            </li>
            <li className='header-contact__list-item'>
              <a className='header-contact__list-item--link' href="#">
                <CiSearch className='header-contact__list-item--icon' />
                Find a doctor
              </a>
            </li>
          </ul>
        </nav>
        <nav className='header-contact__list'>
          <ul className='header-contact__list'>
            <li className='header-contact__list-item'>
              <a className='header-contact__list-item--link' href="#">
                <MdOutlinePhoneInTalk className='header-contact__list-item--icon' />
                  (04) 85443322
              </a>
            </li>
            <li className='header-contact__list-item header-contact__list-item--menu'>
              <button
                type='button'
                className='header-contact__list-item--link'
                onClick={handleLangMenuClick}
              >
                <GiWorld className='header-contact__list-item--icon' />
                {language}
                <FaChevronDown className='header-contact__list-item--icon-menu'/>
              </button>
              <ul className={`language-submenu ${isLangMenuVisible && 'language-submenu--visible'}`}>
                <li className="language-submenu__item">
                  <button
                    type='button'
                    className='language-submenu__item-btn'
                    onClick={() => setCurrentLanguage('English')}
                  >
                    <img src={flagEnglishURL} alt="English" className='language-submenu__icon' /> English
                  </button>
                </li>
                <li className="language-submenu__item">
                  <button
                    type='button'
                    className='language-submenu__item-btn'
                    onClick={() => setCurrentLanguage('简体中文')}
                  >
                    <img src={flagChinaURL} alt="简体中文" className='language-submenu__icon' /> 简体中文
                  </button>
                </li>
                <li className="language-submenu__item">
                  <button
                    type='button'
                    className='language-submenu__item-btn'
                    onClick={() => setCurrentLanguage('العربيّة')}
                  >
                    <img src={flagArabianURL} alt="العربيّة" className='language-submenu__icon' /> العربيّة
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  )
}

export default HeaderContact
