import React from 'react' ;
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className="header__icon" 
          src="./companyLogo2.png"
          alt="logo" 
        />
      </Link>

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