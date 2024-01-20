import React from 'react';
import Hero from '../Hero/Hero'
import Home from './Home.jsx';
import './MySlider.css'
import styles from './Home.module.css'
function MySlider() {


    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className='d-flex'>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className={styles.overlay}>
                            <Hero />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={styles.overlay}>
                            <Home />
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>




            </div>
        </>
    );
}

export default MySlider;
