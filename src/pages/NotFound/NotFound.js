import React from 'react';
import banner from '../../images/helemt-NotFound.png';

const NotFound = () => {
    const bannerImg = {
        backgroundImage: `url(${banner})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '1000vh'
    }
    return (
        <div style={bannerImg}>
            <h1>Page Not Found....</h1>
        </div>
    );
};

export default NotFound;