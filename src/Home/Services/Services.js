import React from 'react';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [Services] = useService();
    return (
        <div>
            <h2>Our Services</h2>
            <div className='services-container'>
                {
                    Services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;