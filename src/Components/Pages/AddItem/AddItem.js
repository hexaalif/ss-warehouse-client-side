import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth)

    const handlePostInventory = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        console.log(name)
        const description = e.target.description.value; console.log(description)
        const price = e.target.price.value;
        console.log(price)
        const img = e.target.img.value;
        console.log(img)
        const quantity = e.target.quantity.value;
        console.log(quantity)
        const supplier = e.target.supplier.value;
        console.log(supplier)

        const userEmail = user.email;

        const addItemDetail = {
            name, description, price, img, quantity, supplier, userEmail
        }
        
        fetch('http://localhost:5000/additem', {
            method: "POST",
            headers: {
                "Contnet-type":"application/json"
            },
            body: JSON.stringify(addItemDetail),
            })
            .then((res) => res.json())
            .then((data) => console.log(data));
            console.log(addItemDetail)
    }
    return (
        <div>
            <h2 className='text-info text-center my-5'>Add Your Item</h2>
            <form onSubmit={handlePostInventory} className='w-50 m-auto text-center my-5 py-3'>
                <input type="text" name="name" placeholder='Name' className='border-0 ps-2 w-50 border-bottom rounded-pill my-2' id="" />
                <br />
                <input type="text" name="description" placeholder='Description' className='border-0 ps-2 my-2 w-50 border-bottom rounded-pill' id="" /> 
                <br />
                <input type="number" name="price"  id="" placeholder='Price' className='border-0 ps-2 my-2 w-50 border-bottom rounded-pill'/> 
                <br />
                <input type="url" name="img" placeholder='URL' className='border-0 ps-2 my-2 w-50 border-bottom rounded-pill' id="" /> 
                <br />
                <input type="number" name="quantity"  id="" placeholder='Quantity' className='border-0 ps-2 my-2 w-50 border-bottom rounded-pill'/> 
                <br />
                <input type="text" name="supplier" placeholder='Supplier' className='border-0 ps-2 w-50 border-bottom rounded-pill my-2' id="" />
                <br />
                <input type="submit" className='border-0 border-rounded rounded-pill w-50 bg-warning my-2' value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;