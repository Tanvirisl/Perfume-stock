import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './UpdateService.css'
const UpdateService = () => {
    const { id } = useParams();
    const [update, setUpdate] = useState({});
    const {name, image, price, quantity} = update;

    useEffect(() => {
        const url = `https://pure-castle-07488.herokuapp.com/service/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdate(data))
    }, [id])
    const handleUpdate = (e) => {
        e.preventDefault()
        const quantity = e.target.quantity.value;
        const newQuantity = parseInt(quantity);
        const oldQuantity = parseInt(update.quantity);
        const AddQuantity = oldQuantity + newQuantity;
        const newProduct = {quantity : AddQuantity}
        // const update = {quantity};

        fetch(`https://pure-castle-07488.herokuapp.com/service/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('user Update success')
                // e.target.reset()
            })
    }
    const handleQuantity = (e) => {

        const quantity =update.quantity;
        let newQuantity = quantity - 1;
        const newProduct = {quantity : newQuantity};
        setUpdate(newProduct);
        if(newQuantity > -1){
            fetch(`https://pure-castle-07488.herokuapp.com/service/${id}`,{
                method:"PUT",
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(newProduct),
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }

    }
    return (
        <div className='update-container'>

            <div className='update-form'>
                <div className='update-info'>
                    <div>
                        <div className='Inventory-container'>
                            <img src={image} alt="" />
                        </div>
                        <div>
                            <h4>Name : {name}</h4>
                            <h4>Price : {price}</h4>
                            <h4>Quantity : {quantity}</h4>
                        </div>
                        <button onClick={handleQuantity} className='button'>Delivered</button>
                    </div>
                </div>
                <form onSubmit={handleUpdate}>
                    <input placeholder='quantity' name='quantity' type="text" /><br />
                    <input className='' type="submit" value='Update' />
                </form>
            </div>
        </div>
    );
};

export default UpdateService;