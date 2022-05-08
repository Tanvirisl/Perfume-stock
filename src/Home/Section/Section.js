import React from 'react';
import image from '../../image/perfume-2.jpg'
import image2 from '../../image/perfume-3.jpg'
import './Section.css'
const Section = () => {
    return (
        <div className='section-main-container'>
            <div className='section-container'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='section-details'>
                    <h1>Best Perfume</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione distinctio asperiores officiis recusandae labore aut velit ipsa sit sunt.</p>
                </div>

            </div>
            <div className='section-container2'>
                <div className='section-details'>
                    <h1>Best price</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non obcaecati placeat iste aspernatur aliquam harum sunt laudantium, sit recusandae</p>
                </div>
                <div>
                    <img src={image2} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Section;