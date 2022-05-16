import React from 'react';
import errorMsg from '../../../Images/cry.jpg'

const NotFound = () => {
    return (
        <div className='container text-center'>
            <img src={errorMsg} alt="" />
        </div>
    );
};

export default NotFound;