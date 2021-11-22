import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/helemt-NotFound.png';

const NotFound = () => {
    const bannerImg = {
        backgroundImage: `url(${banner})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        padding:'10px',
        textAlign:'center'
    }
    return (
        <div style={bannerImg}>
          <Link style={{backgroundColor:'tomato', color:'white', textDecoration:'none', padding:'5px 10px', color:'white', borderRadius:'5px'}} to="/">Home</Link>
        </div>
    );
};

export default NotFound;