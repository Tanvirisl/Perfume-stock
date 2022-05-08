import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {_id, name, quantity, image, description, price} = service;
    return (
        <div className='service-container'>
            <img src={image} alt="" />
            <div>
                <h6>Name:{name}</h6>
                <h6>Quantity:{quantity}</h6>
                <h6>Price:{price}</h6>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;