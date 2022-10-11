import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizDetails.css'

const QuizDetails = () => {
    const quiz = useLoaderData().data;
    const questions = quiz.questions; 
    return (
        <div className='question-container'>
            <h1 className='quiz-name'>Quiz of {quiz.name}</h1>
            {
                questions.map(questionDetails => <Question key={quiz.id} questionDetails ={questionDetails}></Question>)
            }
        </div>
    );
};

export default QuizDetails;