import React from 'react';
import Option from '../Option/Option';
import './Question.css'

const Question = ({questionDetails }) => {
    const {question, options} = questionDetails ;
    // console.log(questionDetails)
    // console.log('id',id)
    return (
        <div className='question-container'>
            <h4>{question}</h4>
            <div className='options-container'>
                {
                    options.map((option, index) => <Option key={index} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default Question;