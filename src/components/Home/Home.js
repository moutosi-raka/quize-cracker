import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCart from '../QuizCart/QuizCart';

import Slider from '../Slider/Slider';

const Home = () => {
    const courseCarts = useLoaderData().data;
    return (
        <div>
            <Slider></Slider>
            {
            courseCarts.map(cart => <QuizCart 
                cart={cart}
                key={cart.id}
                ></QuizCart>)
                
            }
            
        </div>
    );
};

export default Home;