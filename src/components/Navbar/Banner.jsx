import React from 'react';
import './Banner.css';
import Sidebar from '../Sidebar/Sidebar';
import Logo from './T__1_-removebg-preview.png'


const Banner = () => {
    return (
        <div className='first-content-react header'> 
            <img src={Logo} alt="logo" className='logo' />
            <Sidebar />
        </div>
    )
};

export default Banner;