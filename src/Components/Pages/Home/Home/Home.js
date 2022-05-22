import React from 'react';
import { Button } from 'react-bootstrap';
import useUpdate from '../../../../Hooks/useUpdate';
import UpdateItem from '../../updateItem/UpdateItem';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Testimonial from '../Testimonials/Testimonials';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [update] = useUpdate();
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <h1 className='text-center fw-bolder pb-5 mt-5'>Stocks</h1>
            <div className="container">
            <div className='manage-card img-fluid'>
                {update.slice(0,6).map(updateItem =>(
                    <UpdateItem 
                    key={updateItem._id}
                    updateItem={updateItem}
                    ></UpdateItem>
                ))}
            </div>
            <div className="text-center">
            <Button as={Link} to="/updates">See All</Button>
            </div>
            </div> 
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;