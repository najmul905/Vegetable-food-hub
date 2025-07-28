import React from 'react';
import Banner from './Banner';
import Model from './Model';
import Category from './Category';
import OurProducts from './OurProducts';
import OfferSection from './OfferSection';
import Testimony from './Testimony';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Model></Model>
            <Category></Category>
            <OurProducts></OurProducts>
            <OfferSection></OfferSection>
            <Testimony></Testimony>


        </div>
    );
};

export default HomePage;