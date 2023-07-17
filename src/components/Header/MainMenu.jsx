/* eslint-disable react/prop-types */
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'
import menu from './menu.json'
import './MainMenu.scss'

function SubMenu ({ menuList }) {
  return (
    <ul className="menu__list menu__list--submenu">
      {menuList.map((item) => (
        <li key={item.id} className="menu__list-item">
          <a href={`${item.route ?? '#'}`} className="menu__list-link">
            {item.title}
            {item.submenu && (
              <FaChevronRight className='menu__list-icon' />
            )}
          </a>
          {item.submenu && (
            <SubMenu menuList={item.submenu}/>
          )}
        </li>
      ))}
    </ul>
  )
}

function MainMenu () {
  return (
    <nav className='main-menu'>
      <button className="main-menu__mobile-btn">
        <FiMenu className='main-menu__icon' />
      </button>
      <ul className="menu__list">
        {menu.map((item) => (
          <li key={item.id} className="menu__list-item">
            <a href={`${item.route || '#'}`} className="menu__list-link">
              {item.title}
              {item.submenu && (
                <FaChevronDown className='menu__list-icon' />
              )}
            </a>
            {item.submenu && (
              <SubMenu menuList={item.submenu}/>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainMenu
