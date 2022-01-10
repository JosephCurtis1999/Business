import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#services">Services</a></p>
    <p><a href="#pricing">Pricing</a></p>
    <p><a href="#contact">Contact</a></p>
    <p><a href="#testimonials">Testimonials</a></p>
    </>
)


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

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
                    <p><a href="#contact">Contact</a></p>
                    <p><a href="#testimonials">Testimonials</a></p>
                </div>
            </div>
            <div className='webvisuals__navbar-menu'>
                {toggleMenu
                ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}></RiCloseLine>
                : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}></RiMenu3Line>
                }
                {toggleMenu && (
                    <div className='webvisuals__navbar-menu_container scale-up-center'>
                        <div className='webvisuals__navbar-menu-container-links'>
                            <Menu></Menu>
                        </div>
                    </div>
                )}

            </div>
            
            
        </div>
    )
}

export default Navbar
