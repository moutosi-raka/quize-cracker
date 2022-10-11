import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizDetails.css'

const QuizDetails = () => {
    const quiz = useLoaderData().data;
    const questions = quiz.questions; 
    
    return (
        <div className='questions-container'>
            <h1 className='quiz-name'>Quiz of {quiz.name}</h1>
            <div>

            {
                questions.map((questionDetails, inx) => 
                <Question inx={inx} key={questionDetails.id} questionDetails ={questionDetails}></Question>)
            }
            </div>
        </div>
    );
};

export default QuizDetails;