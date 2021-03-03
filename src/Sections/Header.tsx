import React from 'react'
import {ReactComponent as MenuIcon} from '../assets/menu.svg'

const Mobile = () => {
  return (
    <div className="header">
      <h1>Scramper</h1>
      <MenuIcon className="header__img" />
    </div>
  );
}

const PC = () => {
  return (
    <div className="header">
      <h1>Scramper</h1>
      <div className="header__navbar">
        <a href='#welcome'>Home</a>
        <a href='#content'>About</a>
        <a href='#contact'>Contact</a>
      </div>
    </div>
  );
}

const Header = () => {
    return window.innerWidth > 1200 ? <PC/> : <Mobile/>
}

export default Header