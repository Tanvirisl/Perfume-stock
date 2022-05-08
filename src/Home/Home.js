import React from 'react';
import Banner from './Banner/Banner';
import './Home.css'
import Section from './Section/Section';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='home-container'>
            <Banner></Banner>
            <Services></Services>
            <Section></Section>
        </div>
    );
};

export default Home;