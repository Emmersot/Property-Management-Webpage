import React, { useState } from 'react';
import './Banner.css';
import Button from '@mui/material/Button';
import Search from './Search';


function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='banner__background'>
        <div className='banner__search'>
          {showSearch && <Search />}

          <Button onClick={() => setShowSearch(!showSearch)}
            className='banner__searchButton'
            variant='outlined'>{showSearch ? "Hide" : "Search Dates"}</Button>
        </div>
        <div className='banner__info'>
          <div className='banner__text'>
            <h2>Not sure where to go?</h2>
            <h1>Perfect</h1>
            <h2><strong>Plan a getaway</strong></h2>
            <Button>Explore Nearby</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner