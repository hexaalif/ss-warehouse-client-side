import React, { useEffect, useState } from 'react';
import Update from '../Update/Update';
import UpdateItem from '../updateItem/UpdateItem';
import './Updates.css'

const Updates = () => {
    const [updates, setUpdates] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/update')
        .then(res => res.json())
        .then(data => setUpdates(data))
    }, [])
    return (
        <div className='container mb-5'>
            <h1 className='text-center fw-bolder pb-5 mt-5'>Stocks</h1>
            <div className='manage-card img-fluid'>
                {updates.map(updateItem =>(
                    <UpdateItem 
                    key={updateItem._id}
                    updateItem={updateItem}
                    ></UpdateItem>
                ))}
            </div>
        </div>
    );
};

export default Updates;