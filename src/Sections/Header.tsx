import React from 'react'
import {ReactComponent as MenuIcon} from '../assets/menu.svg'

const Header = () => {
    return (
      <div className="header">
        <h1>Scramper</h1>
        <MenuIcon />
      </div>
    );
}

export default Header