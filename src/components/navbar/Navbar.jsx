import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';




const Navbar = () => {
    return (
        <div className='webvisuals__navbar'>
            <div className='webvisuals__navbar-links'>
                <div className='webvisuals__navbar-links_logo'>
                    <h1>webvisuals</h1>
                </div>
                <div className='webvisuals__navbar-links_container'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#services">Services</a></p>
                    <p><a href="pricing">Pricing</a></p>
                    <p><a href="#about">About</a></p>
                    <p><a href="#testimonials">Testimonials</a></p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Navbar
