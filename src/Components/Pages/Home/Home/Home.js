import React from 'react';
import Stocks from '../../Stocks/Stocks';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Testimonial from '../Testimonials/Testimonials';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Stocks></Stocks>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;