import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UpdateItem = ({ updateItem }) => {
    const {_id, img, name, price, supplier, about} = updateItem;

    let navigate = useNavigate()
    const handleUpdate = (id) =>{
        let path = `/update/${id}`
        navigate(path)
    }
    return (
        <div className='container'>
            <div className="row">
                <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h4>{price}</h4>
                    <p><b>Supplier: {supplier}</b></p>
                    <Card.Text>{about}</Card.Text>
                    <Button onClick={() => handleUpdate(_id)} variant="primary">
                    Update
                    </Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default UpdateItem;