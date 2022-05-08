import React, { useEffect, useState } from 'react';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    // const [Services, setService] = useService();

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [page, size]);

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 6)
                setPageCount(pages)
            })
    }, [])


    return (
        <div>
            <h2>Our Services</h2>
            <div className='services-container'>
                {
                    service.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }

            </div>
            <div className='pagination'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className={page === number ? 'selected' : ''}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                }

                <select onChange={e => setSize(e.target.value)}>
                    <option value="5" selected>6</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Services;