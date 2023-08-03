/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { FiMenu } from 'react-icons/fi'
import { FaChevronRight, FaChevronDown } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import menu from './menu.json'
import './MainMenu.scss'

function SubMenu ({ menuList, isSubMenuOpen }) {
  const [childSubMenuOpen, setChildSubMenuOpen] = useState(null)

  const handleSubmenuBtnClick = (menu) => {
    if (!menu.submenu) {
      return
    }

    setChildSubMenuOpen((currentSubMenuOpen) => {
      if (currentSubMenuOpen === menu.id) {
        return null // It was already open so the second time it calls this function it will close it
      }

      return menu.id // It will set the new sub-menu opened
    })
  }

  const isChildSubMenuOpen = (menuId) => {
    return menuId === childSubMenuOpen
  }

  return (
    <ul className={`menu__list menu__list--submenu ${isSubMenuOpen && 'menu__list--submenu-open'}`}>
      {menuList.map((item) => (
        <li key={item.id} className="menu__list-item">
          <NavLink to={`${item.route ?? '#'}`} className="menu__list-link" onClick={() => handleSubmenuBtnClick(item)}>
            {item.title}
            {item.submenu && <FaChevronRight className='menu__list-icon menu__list-icon--chevron' />}
            {item.submenu && (isChildSubMenuOpen(item.id) ? <AiOutlineMinus className='menu__list-icon menu__list-icon--minus'/> : <AiOutlinePlus className='menu__list-icon menu__list-icon--plus' />)}
          </NavLink>
          {item.submenu && (
            <SubMenu menuList={item.submenu} isSubMenuOpen={isChildSubMenuOpen(item.id)} />
          )}
        </li>
      ))}
    </ul>
  )
}

function MainMenu ({ onMenuOpen, mustHideMenu }) {
  const [isMainMenuVisible, setIsMainMenuVisible] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState(null)

  const handleMainBtnClick = () => {
    setIsMainMenuVisible((isVisible) => !isVisible)
  }

  const handleSubmenuBtnClick = (menu) => {
    if (!menu.submenu) {
      return
    }

    setSubMenuOpen((currentMenuOpen) => {
      if (currentMenuOpen === menu.id) {
        return null // It was already open so the second time it calls this function it will close it
      }

      return menu.id // It will set the new sub-menu opened
    })
  }

  const isSubMenuOpen = (menuId) => {
    return menuId === subMenuOpen
  }

  useEffect(() => {
    isMainMenuVisible && onMenuOpen()
  }, [isMainMenuVisible])

  useEffect(() => {
    mustHideMenu && setIsMainMenuVisible(false)
  }, [mustHideMenu])

  return (
    <nav className='header__item main-menu'>
      <button
        onClick={handleMainBtnClick}
        type='button'
        className="main-menu__mobile-btn"
      >
        {isMainMenuVisible ? <CgClose className='main-menu__icon' /> : <FiMenu className='main-menu__icon' />}
      </button>
      <ul className={`menu__list ${isMainMenuVisible && 'menu__list--visible'}`}>
        {menu.map((item) => (
          <li key={item.id} className="menu__list-item">
            <NavLink to={`${item.route || '#'}`} className="menu__list-link" onClick={() => handleSubmenuBtnClick(item)}>
              {item.title}
              {item.submenu && <FaChevronDown className='menu__list-icon menu__list-icon--chevron' />}
              {item.submenu && (isSubMenuOpen(item.id) ? <AiOutlineMinus className='menu__list-icon menu__list-icon--minus'/> : <AiOutlinePlus className='menu__list-icon menu__list-icon--plus' />)}
            </NavLink>
            {item.submenu && (
              <SubMenu className='' menuList={item.submenu} isSubMenuOpen={isSubMenuOpen(item.id)} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainMenu
