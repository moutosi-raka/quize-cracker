import React from 'react';
import Option from '../Option/Option';
import './Question.css'

const Question = ({questionDetails,inx}) => {
    const {question, options} = questionDetails ;
  
    return (
        <div className='question-container'>
            <h4>{inx+1}. {question}</h4>
            <div className='options-container'>
                {
                    options.map((option, index) => <Option key={index} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default Question;