import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

function Home() {
  return (
    <div className='home'>
      <Banner />
      
      {/* <div class="container"> */}
        <div className='home__section'>
          <div class="container-fluid mb-4">
          <div class="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
          <div class="col mt-4">
            <Card
              src="./house1.jpg"
              title="3 Bedroom Flat in Bournemouth"
              description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
              price="£130/night"
              />
            </div>
            
            <div class="col mt-4">
            <Card
              src="./house1.jpg"
              title="Penthouse in London"
              description="Enjoy the amazing sights of London with this stunning penthouse"
              price="£350/night"
              />
            </div>
            <div class="col mt-4">
            <Card
              src="./house1.jpg"
              title="1 Bedroom apartment"
              description="Superhost with great amenities and a fabolous shopping complex nearby"
              price="$170/night"
              />
            <div class="col mt-4"> 
            <Card
              src="./house1.jpg"
              title="1 Bedroom apartment"
              description="Superhost with great amenities and a fabolous shopping complex nearby"
              price="£70/night"
            />
            </div>
            </div>
            </div>
          </div>
      </div>
  </div>
  )
}

export default Home