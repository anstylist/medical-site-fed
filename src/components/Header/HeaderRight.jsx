import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi2'
import { BiSearch } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import './HeaderRight.scss'

function HeaderRight () {
  return (
    <nav className='header__nav-right'>
      <button className='header__nav-right-mobile'>
        <BsThreeDotsVertical className='header__nav-right-icon'/>
      </button>
      <ul className='header__nav-right-menu'>
        <li className='header__nav-right-menu__item'>
          <a href='#' className='header__nav-right-link'>
            <BiSearch className='header__nav-right-icon'/>
          </a>
        </li>
        <li className='header__nav-right-menu__item'>
          <a href='#' className='header__nav-right-link header__nav-right-link--cart'>
            <HiOutlineShoppingCart className='header__nav-right-icon'/>
            <div className='header__nav-right-counter-tag'>0</div>
          </a>
        </li>
        <li className='header__nav-right-menu__item'>
          <a href='#' className='header__nav-right-link header__nav-right-link--btn '>
            <FaRegCalendarAlt className='header__nav-right-icon'/>
            Appointment
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderRight
