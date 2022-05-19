import React from 'react';
import useManage from '../../../Hooks/useManage';
import UpdateItem from '../updateItem/UpdateItem';
import './Stocks.css'

const Stocks = () => {
    const [manage, setManages] = useManage();
    return (
        <div className='container mb-5'>
            <h1 className='text-center fw-bolder pb-5 mt-5'>Stocks</h1>
            <div className='manage-card img-fluid'>
                {manage.map(updateItem =>(
                    <UpdateItem 
                    key={updateItem._id}
                    updateItem={updateItem}
                    ></UpdateItem>
                ))}
            </div>
        </div>
    );
};

export default Stocks;