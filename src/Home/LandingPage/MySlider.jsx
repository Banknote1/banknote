import React from 'react';
import FinancialServices from '../FinancialServices/FinancialServices';
import FinancialSectors from '../FinancialServices/FinancialSectors';
import Carousel from './Carousel';

function MySlider() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <FinancialServices />
                </div>
                <div className="carousel-item">
                    <FinancialSectors />
                </div>
                <div className="carousel-item">
                    <Carousel />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default MySlider;
