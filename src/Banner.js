import React from 'react'
import './Banner.css'
import Button from '@mui/material/Button';


function Banner() {
  return (
    <div className='banner'>
      <div className='banner__search'>
        <Button
          className='banner__searchButton'
          variant='outlined'>Search Dates
        </Button>
      </div>
      <div className='banner__info'>
        <h1>Get out and stretch your imagination</h1>
        <img className='banner__background' src="./bannerBackground.jpg" alt="ocean"/>
        <h3>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h3>
        <Button>Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner