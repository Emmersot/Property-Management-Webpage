import React, { useState } from 'react';
import '.././Banner.css';
import Button from '@mui/material/Button';
import Search from './Search';
import { useNavigate } from "react-router-dom";


function Banner() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearch && <Search />}

        <Button onClick={() => setShowSearch(!showSearch)}
          className='banner__searchButton'
          variant='outlined'>{showSearch ? "Hide" : "Search Dates"}</Button>
      </div>
      {/* Banner bottom left text */}
      <div className='banner__info'>
        <div className='banner__text'>
          <h1>Not sure where to go?</h1>
          <h1>Plan a getaway</h1>
          <Button onClick={() => navigate('/search')}>Explore Nearby</Button>
        </div>
      </div>
    </div>
  )
}

export default Banner