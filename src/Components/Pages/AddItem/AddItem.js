import React from 'react';

const AddItem = () => {
    return (
        <div>
            <h2 className='text-info text-center my-5'>Add Your Favorite Item</h2>
            <form className='w-50 m-auto text-center my-5 py-3'>
                <input type="text" name="name" placeholder='Name' className='border-0 ps-2 w-50 border-bottom rounded-pill my-2' id="" />
                <br />
                <input type="text" name="description" placeholder='Description' className='border-0 ps-2 my-2 w-50 border-bottom rounded-pill' id="" /> 
                <br />
                <input type="number" name="price"  id="" placeholder='Price' className='border-0 ps-2 my-2 w-50 border-bottom rounded-pill'/> 
                <br />
                <input type="url" name="url" placeholder='URL' className='border-0 ps-2 my-2 w-50 border-bottom rounded-pill' id="" /> 
                <br />
                <input type="number" name="quantity"  id="" placeholder='Quantity' className='border-0 ps-2 my-2 w-50 border-bottom rounded-pill'/> 
                <br />
                <input type="text" name="name" placeholder='Supplier' className='border-0 ps-2 w-50 border-bottom rounded-pill my-2' id="" />
                <br />
                <input type="submit" className='border-0 border-rounded rounded-pill w-50 bg-warning my-2' value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;