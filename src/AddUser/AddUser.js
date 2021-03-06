import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AddUser.css'
const AddUser = () => {
    const navigate = useNavigate()
    const handleUpdate = (e) => {
        e.preventDefault();
        const image = e.target.image.value;
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const suppler = e.target.suppler.value;

        const addItem = { image, name, price, quantity, suppler };

        fetch('https://pure-castle-07488.herokuapp.com/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('Add Items Success')
                navigate('/')
            })
    }
    return (
        <div>
            <form className='addUser-container' onSubmit={handleUpdate}>
                <input placeholder='url' name='image' type="text" required/><br />
                <input placeholder='name' name='name' type="text" required/><br />
                <input placeholder='price' name='price' type="text" required/><br />
                <input placeholder='quantity' name='quantity' type="text" required/><br />
                <input placeholder='description' name='description' type="text" required/><br />
                <input placeholder='suppler_name' name='suppler' type="text" required/><br />
                <input type="submit" value='Add-Item' />
            </form>
        </div>
    );
};

export default AddUser;