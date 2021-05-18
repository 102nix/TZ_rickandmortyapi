import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

export const Navbar: React.FC = () => {

  const [menuCls, setMenuCls] = useState(['header__menu'])
  const [burgerCls, setBurgerCls] = useState(['header__burger'])

  const handlerShowMenu = () => {
    if (menuCls.indexOf('active') === -1) {
      setMenuCls([...menuCls, 'active'])
      setBurgerCls([...burgerCls, 'active'])
    } else {
      setMenuCls([...menuCls.splice(menuCls.indexOf('header__menu'), 1)])
      setBurgerCls([...burgerCls.splice(burgerCls.indexOf('header__burger'), 1)])
    }
  }

  return(
    <div className="header">
      <div className="header__body">
        <div className="header__logo">ТЗ по ReactJS</div>
        <div 
          className={burgerCls.join(' ')}
          onClick={handlerShowMenu}
        >
          <span></span>
        </div>
        <div className={menuCls.join(' ')}>
          <ul className="header__list">
            <li>
              <NavLink 
                exact 
                to='/' 
                className="header__link"
                onClick={handlerShowMenu}
              >
                Главная
              </NavLink> 
            </li>
            <li>
              <NavLink 
                to='/about' 
                className="header__link"
                onClick={handlerShowMenu}
              >
                О проекте
              </NavLink> 
            </li>
            <li>
              <NavLink 
                to='/tech' 
                className="header__link"
                onClick={handlerShowMenu}
              >
                Инструменты
              </NavLink> 
            </li>
            <li>
              <a href="https://rickandmortyapi.com/" className="header__link">API</a>  
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}