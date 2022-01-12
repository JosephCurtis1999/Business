import React from 'react';
import './testimonials.css';

const Testimonials = () => {


    return (
        <div className='card'>
            <div className="card__inner">
                <div className="card__face card__face--front">
                    <h2>Click Here for some reviews from clients</h2>

                </div>
                <div className="card__face card__face--back">
                    <div className="card__content">
                        <div className="card__header">
                            <h2></h2>
                            <div className="card__body">
                                <h3>Testimonials</h3>
                                <br />
                                <br />
                                <p>MC Consultation, "The service was
                                    fast and just what I needed for my
                                    business".
                                </p>
                                <br />
                                <br />
                                <p>Reach, "I needed a website built
                                    quickly for my startup, webvisuals
                                    did this for me at an affordable 
                                    price".
                                </p>
                                <br />
                                <br />
                                <p>29states, "We started an online
                                    restaurant and wanted a website
                                    that needed updating regularly,
                                    webvisuals was able to provide 
                                    both the build and management service".
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Testimonials
