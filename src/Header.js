import React from 'react' ;
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <div className='header'>
      <img
        className="header__icon" 
        src="./companyLogo2.png"
        alt="logo" 
      />
      <div className='header__center'>
        <input type="text" />
        <SearchIcon />
      </div>
      <div className='header__right'>
        <p>Become a host</p>
        <AccountCircleIcon />
      </div>
    </div>
  )
}

export default Header