import React from 'react';
import './Question.css'

const Question = ({questionDetails }) => {
    const {question} = questionDetails ;
    console.log(question)
    return (
        <div>
            <h4>{question}</h4>
        </div>
    );
};

export default Question;