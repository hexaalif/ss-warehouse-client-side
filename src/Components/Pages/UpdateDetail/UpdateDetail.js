import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useUpdateDetail from '../../../Hooks/useUpdateDetail';

const UpdateDetail = () => {
    const { updateId } = useParams();
    const [update] = useUpdateDetail(updateId)
    const [item, setItem] = useState([])
    const [refresh, setRefresh] = useState(0)

    useEffect(() =>{
        fetch(`http://localhost:5000/update/${updateId}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [updateId, item, refresh])

    const handleAdd = e =>{
        e.preventDefault()
        const quantityInput = e.target.inputNum.value;
        const quantity = update.quantity + parseInt(quantityInput)

        const name = item.name;
        const price = item.price;

        const updatedItem = {
            name,
            price,
            quantity
          };

        fetch(`http://localhost:5000/update/${item._id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(updatedItem),
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
      
        //   setRefresh(refresh + 1);
          e.target.reset();
          toast.success("Added success");
    }

    // deliver btn function
    const handleDeliver = (id) => {
        const procced = window.confirm("Are you sure?");
    
        if (procced) {
          const quantity = item.quantity - 1;
          console.log(quantity) 
    
          const updatedItem = {
            quantity
          };
    
          fetch(`http://localhost:5000/update/${id}`,{
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(updatedItem),
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    
          setRefresh(refresh + 1);
          toast.success("Delivery success");
        }
      };

    return (
        <div className="container">
            <h2 className='text-center fw-bolder py-3'>Update your Selected Item</h2>
            <div className="row mb-5 pb-5 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <img className='img-fluid' src={update.img} alt="" />
                </div>
                <div className="col-md-6 ps-5">
                    <p><b>Price: {update.price}</b></p>
                    <h4>{update?.name}</h4>
                    <p>Supplier: {update.supplier}</p>
                    <h5>Quantity: {update.quantity}</h5>
                    <div>
                    <Form onSubmit={handleAdd}>
                        <input className='rounded-pill me-2 ps-2' type="number" name="inputNum" id="" />

                        <input className='rounded-pill bg-danger text-white border-0 p-2' type="submit" value="Restock" /> 
                        
                        <br />
                        <Button onClick={() => handleDeliver(item._id)} variant="dark" type="submit" className='mt-3'>
                        Delivered
                        </Button> <br />
                    </Form>
                    </div>
                    <Button className='btn btn-success mt-3' as={Link} to="/updates">Manage Products</Button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default UpdateDetail;