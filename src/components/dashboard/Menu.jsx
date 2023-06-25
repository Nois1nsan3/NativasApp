import React, { useEffect } from 'react'
import { Icon } from './Icon'
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt
} from 'react-icons/fa'

import './menu.css'
import Logo from '../../assets/img/logo.png'

function Menu () {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById('mainMenu')
      .querySelectorAll('li')

    function changeActive () {
      mainMenuLi.forEach((n) => n.classList.remove('active'))
      this.classList.add('active')
    }

    mainMenuLi.forEach((n) => n.addEventListener('click', changeActive))
  }, [])

  return (
    <menu>
      <img src={Logo} alt='' />

      <ul id='mainMenu'>
        <Icon icon={<FaDelicious />} />
        <Icon icon={<FaShoppingCart />} />
        <Icon icon={<FaWallet />} />
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
      </ul>

      <ul className='lastMenu'>
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  )
}

export default Menu
