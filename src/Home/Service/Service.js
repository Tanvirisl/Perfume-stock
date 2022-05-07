import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {_id, name, quantity, image, description, price} = service;
    return (
        <div className='service-container'>
            <img src={image} alt="" />
        </div>
    );
};

export default Service;