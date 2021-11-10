import { Box } from '@mui/system';
import React from 'react';
import Explore from '../../Explore/Explore';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
             <Banner></Banner>
            <Products></Products>
            <Feature></Feature>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;