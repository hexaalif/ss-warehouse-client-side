import { faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-success text-light p-3'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3  className='mt-3'>Our Address</h3>
                        <p className='fs-5 mt-4'><FontAwesomeIcon icon={faMapPin}/> Ashrafi Villa, Dokkhin Dollai, Kaliarchor, Nobabpur-3501, Cumilla, Bangladesh</p>
                        <p className='fs-5'><FontAwesomeIcon icon={faPhone}/> <b>+8801624352645</b></p>
                    </div>
                    <div className="col-md-3">
                        <h3 className='mt-3'>Get News</h3>
                        <div className='mt-3'>
                            <input type="email" name="email" id="" placeholder='Get Newsletters' className='rounded w-100'/>
                            <button className='btn btn-dark mt-2'>Send</button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3 className='mt-3'>Quick Links</h3>
                        <h6><Link className='text-light' to="/blogs">Blogs</Link></h6>
                        <h6><Link className='text-light' to="/login">Login</Link></h6>
                        <h6><Link className='text-light' to="/stocks">Stocks</Link></h6>
                    </div>
                </div>
                <div className="row"></div>
            </div>
            <h5 className='text-center p-3 text-light'>All &copy; Right Reserved by <b>SS-Fantasy</b></h5>
        </div>
    );
};

export default Footer;