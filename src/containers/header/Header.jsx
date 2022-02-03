import React from 'react';
import './header.css';


const Header = () => {
    return (
        <div className='webvisuals__header section__padding' id='home'>
            <div className='webvisuals__header-content'>
                <h1>Welcome to webvisuals. We build, deploy and manage websites for your business.</h1>
                <p>Your website is just as important as your store front or menu. In this day and age, the first impression
                    of your business will be what users encounter on your website. Invest in your business by using our services
                    to build and deploy a modern, interactive website.
                </p>
                
            </div>
            <div className='webvisuals__header-image'>
                <img src="/images/websites.jpg" alt="websites" />
            </div>
        </div>
    )
}

export default Header
