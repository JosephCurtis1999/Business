import React from 'react'

import { Footer, Blog, Possibility, Features, Webvisuals, Header } from './containers';
import { Navbar, Pricing, Services, Testimonials, About } from './components';
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />

            </div>
            <About />
            <Webvisuals />
            <Features />
            <Services />
            <Possibility />
            <Pricing />
            <Blog />
            <Testimonials />
            <Footer />


            
            
        </div>
    )
}

export default App
