/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import { BiSearch } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import './HeaderRight.scss'

function HeaderRight ({ onMenuOpen, mustHideMenu }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const handleMenuVisible = () => {
    setIsMenuVisible((isVisible) => !isVisible)
  }

  useEffect(() => {
    isMenuVisible && onMenuOpen()
  }, [isMenuVisible])

  useEffect(() => {
    mustHideMenu && setIsMenuVisible(false)
  }, [mustHideMenu])

  return (
    <nav className='header__item header__nav-right'>
      <button
        className='header__nav-right-mobile'
        onClick={handleMenuVisible}
        aria-label='Toggle Secondary Menu'
      >
        <BsThreeDotsVertical className='header__nav-right-icon'/>
      </button>
      <ul className={`header__nav-right-menu ${isMenuVisible && 'header__nav-right-menu--visible'}`} aria-label='Search'>
        <li className='header__nav-right-menu__item'>
          <a href='#' className='header__nav-right-link'>
            <BiSearch className='header__nav-right-icon'/>
          </a>
        </li>
        <li className='header__nav-right-menu__item'>
          <a href='#' className='header__nav-right-link header__nav-right-link--cart' aria-label='Shopping Cart'>
            <HiOutlineShoppingCart className='header__nav-right-icon'/>
            <div className='header__nav-right-counter-tag'>0</div>
          </a>
        </li>
        <li className='header__nav-right-menu__item'>
          <a href='#' className='header__nav-right-link header__nav-right-link--btn'>
            <FaRegCalendarAlt className='header__nav-right-icon'/>
            Appointment
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderRight
