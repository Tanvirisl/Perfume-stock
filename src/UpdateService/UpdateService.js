import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateService = () => {
    const {id} = useParams()

    const [update, setUpdate] = useState({});

    useEffect(() =>{
        const url = `http://localhost:5000/service/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdate(data))
    },[])
    const handleUpdate =(e)=>{
        e.preventDefault()
        const image = e.target.image.value;
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const description = e.target.description.value;

        const update = {image, name, price, quantity, description};

        fetch(`http://localhost:5000/service/${id}`,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data)
            toast('user Update success')
            // e.target.reset()
        })
    }
    return (
        <div>
            <h2>update service : {update.name}</h2>
            <form onSubmit={handleUpdate}>
                <input placeholder='url' name='image' required type="text" /><br />
                <input placeholder='name' name='name' required type="text" /><br />
                <input placeholder='price' name='price'required type="text" /><br />
                <input placeholder='quantity' name='quantity' required type="text" /><br />
                <input placeholder='description' name='description' required type="text" /><br />
                <input type="submit" value='Update-User' />
            </form>
        </div>
    );
};

export default UpdateService;