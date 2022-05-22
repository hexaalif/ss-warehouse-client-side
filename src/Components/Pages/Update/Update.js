import React from 'react';
import { useNavigate } from 'react-router-dom';

const Update = ({ updateItem }) => {
    const { _id, name, img, description, price } = updateItem;

    const navigate = useNavigate()
    const navigateToUpdateDetail = (id) =>{
        navigate(`/update/${id}`)
    }
    return (
        <div>
            <div className="service">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>
                <small>{description}</small>
            </p>
            <button
                onClick={() => navigateToUpdateDetail(_id)}
                className="btn btn-primary"
            >
                Book: {name}
            </button>
            </div>
        </div>
    );
};

export default Update;