import React from 'react' ;
import './Header.css'


function Header() {
  return (
    <div className='header'>
      <img
        className="header__icon" 
        src="./companyLogo.png"
        alt="logo" 
      />
      <img
        className="header__icon2" 
        src="./companyLogo2.png"
        alt="logo" 
      />
    </div>
  )
}

export default Header