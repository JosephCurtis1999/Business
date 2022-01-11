import React from 'react';
import './services.css';

const Services = () => {
    return (
        <div className='webvisuals__services section__margin' id='Services'>
            <div className='webvisuals__services-heading'>
                <h1 className='webvisuals__services-title'>Services</h1>
            </div>

            <div className='webvisuals__services-headings'>

                <div className='webvisuals__services-building-box'>
                <h2>Building</h2>
                <img className='buildingimg' src="/images/building.png" alt="building" />
                <p className='webvisuals__building-para'>We will build your website from scratch and design it based on your
                    preferences
                </p>
                </div>

                <div className='webvisuals__services-deploying-box'>
                <h3>Deploying</h3>
                <img className='deployingimg' src="/images/deploying.png" alt="deploying" />
                <p className='webvisuals__deploying-para'>Once we have built your website we will deploy it to the internet for you and
                    your customers
                </p>
                </div>

                <div className='webvisuals__services-managing-box'>
                <h4>Managing</h4>
                <img className='managingimg' src="/images/managing8.png" alt="managing" />
                <p className='webvisuals__managing-para'>For a monthly fee we will manage and update your website
                on demand
                </p>
                </div>

            </div>
            
            
        </div>
    )
}

export default Services
