import React from 'react';
import Banner from '../Banner/Banner';
import ExpHomes from '../ExpHomes/ExpHomes';

import News from '../News/News';

import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <ExpHomes></ExpHomes>
            <Reviews></Reviews>
            <News></News>
        </div>
    );
};

export default Home;