import React from 'react';
import '.././Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
    <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="./cabin1.jpg"
                title="3 Bedroom Cabin in Montana"
                description="Visit the hills of Montana"
                price="$130/night"
            />
            <Card
                src="./cabin2.jpg"
                title="Cabin in the woods"
                description="Enjoy the amazing sights of trees"
                price="$40/night"
            />
            <Card
                src="./cabin3.jpg"
                title="Pool Guest House"
                description="Superhost with great amenities"
                price="$70/night"
            />
            <Card
                src="./cabin4.jpg"
                title="1 Bedroom Yurt in the Willamette Forest"
                description="Superhost with a stunning view of the national forest"
                price="$130/night"
            />
            </div>
            <div className='home__section'>
            <Card
                src="./house1.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$320/night"
            />
            <Card
                src="./house2.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$170/night"
            />
            <Card
                src="./house3.jpg"
                title="6 Bedroom Villa"
                description="Secluded beach side get away in Batumi"
                price="$470/night"
            />
            <Card
                src="./house4.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/night"
            />
            </div>
        </div>
    )
}

export default Home