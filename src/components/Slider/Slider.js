import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import './Slider.css'

const Slider = () => {
    return (
        <div className='slider'>
            <Carousel>
            <div >
                    <img src={img1} alt="" />
                    <div className='slider-text'>
                    <h1>Improve You Knowledge</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore culpa excepturi consectetur, dolor odit ut nostrum voluptas. Iusto, voluptate. Quas eaque dolore illum fuga earum quod laboriosam ut optio aliquam!</p>
                    </div>
                   
                </div>
                <div>
                    <img src={img2} alt="" />
                    <div className='slider-text'>
                    <h1>Improve You Knowledge</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore culpa excepturi consectetur, dolor odit ut nostrum voluptas. Iusto, voluptate. Quas eaque dolore illum fuga earum quod laboriosam ut optio aliquam!</p>
                    </div>
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;