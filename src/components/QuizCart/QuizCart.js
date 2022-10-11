import React from 'react';
import { Link } from 'react-router-dom';
import './QuizCart.css'

const QuizCart = ({cart}) => {
    console.log(cart)
    const {name, id, logo,total} = cart;
    return (
        <div className='cart-container'>
            <div className='cart-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='cart-details'>
                <div>
                <h3>{name}</h3>
            <p> Total Quiz: {total}</p>
            <Link><button className='practice-btn'>Start Practice</button></Link>
                </div>
            </div>
        </div>
    );
};

export default QuizCart;