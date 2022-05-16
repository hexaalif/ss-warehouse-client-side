import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container text-center pt-5">
                <div>
                <h2 className='fs-1 fw-bolder text-white mt-5'>BUSINESS WITH US, WE DO EVERYTHING</h2>
                <p className='fs-3 text-white mt-5'>SS-WAREHOUSE is a name of believe for your business. <br /> We make business easier.</p>
                <button className='btn btn-success  fs-5'>Contact Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;