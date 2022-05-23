import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Parts from './Parts/Parts';
import Specialty from './Specialty/Specialty';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Specialty></Specialty>
            <Footer></Footer>
        </div>
    );
};

export default Home;