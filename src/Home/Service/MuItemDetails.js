import React from 'react';
import './MyItem.css'
const MuItemDetails = ({ item }) => {

    const { image, price, name, quantity } = item;
    // console.log(item)
    return (
        <div className='mainDetails-container'>
            <div className='myDetails-Container'>
                <div className='myItem-image'>
                    <img src={image} alt="" />
                </div>
                <div>
                    <h3>Name : {name}</h3>
                    <h4>Price : ${price}</h4>
                    <h4> quantity : {quantity}</h4>
                </div>
            </div>
        </div>
    );
};

export default MuItemDetails;