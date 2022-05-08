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
                    <p>We are crossing an invisible line this week, which will allow us to say goodbye to the convoluted past, and start planning for a much more purposeful future.</p>
                </div>

            </div>
            <div className='section-container2'>
                <div className='section-details'>
                    <h1>Best price</h1>
                    <p>You may have been involved in a particular purchase, and it’s still in the testing phase. Try to prolong the testing and tasting unless you already know</p>
                </div>
                <div>
                    <img src={image2} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Section;