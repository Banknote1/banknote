import React, { useEffect } from 'react'
import fullpage from 'fullpage.js'
import Home from './Home';
import Hero from '../Hero/Hero';
import '../../index.css';
function HorizontalSlider() {
    useEffect(() => {

        new fullpage('#fullpage', {
            navigation: true,
            scrollHorizontally: true,

        });

    }, []);
    return (
        <div id="fullpage">
            {/* Add your horizontal sections here */}
            <div className="section ">
                <div className='overlay'>
                    <Hero />
                </div>


            </div>
            <div className="section  ">
                <div className='overlay'>
                    <Home />
                </div>


            </div>
            <div className="section">Section 3</div>
        </div>
    )
}

export default HorizontalSlider