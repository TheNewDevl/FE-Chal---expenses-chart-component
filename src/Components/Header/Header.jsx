import React from 'react'
import LogoSvg from '../../assets/logo.svg'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div>
        <p className="header__text">My balance</p>
        <h1 className="header__amount">$921.48</h1>
      </div>
      <img src={LogoSvg} alt="header logo" />
    </header>
  )
}

export default Header
