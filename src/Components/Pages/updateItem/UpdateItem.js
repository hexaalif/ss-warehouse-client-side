import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UpdateItem = ({updateItem}) => {
    const {img, name, price, supplier, about} = updateItem;

    let navigate = useNavigate()
    const handleUpdate = () =>{
        let path = `/manage`
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
                    <Button onClick={handleUpdate} variant="primary">
                    Update
                    </Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default UpdateItem;