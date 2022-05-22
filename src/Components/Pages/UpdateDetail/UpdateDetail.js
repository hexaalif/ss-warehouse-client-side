import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useUpdateDetail from '../../../Hooks/useUpdateDetail';

const UpdateDetail = () => {
    const { updateId } = useParams();
    const [update] = useUpdateDetail(updateId)
    return (
        <div className="container">
            <h2 className='text-center fw-bolder py-3'>Update your Selected Item</h2>
            <div className="row mb-5 pb-5 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <img className='img-fluid' src={update.img} alt="" />
                </div>
                <div className="col-md-6 ps-5">
                    <p><b>Price: {update.price}</b></p>
                    <h4>{update.name}</h4>
                    <p>Supplier: {update.supplier}</p>
                    <h5>Quantity: {}</h5>
                    <div>
                    <input className='rounded-pill me-2 ps-2' type="number" name="number" id="" />
                    <button className='btn btn-danger rounded-pill'>Restock</button>
                    </div>
                    <button className='btn btn-dark my-3'>Delivered</button> <br />
                    <button className='btn btn-success'>Manage Products</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateDetail;