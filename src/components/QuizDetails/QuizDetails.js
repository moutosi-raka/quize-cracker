import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quiz = useLoaderData().data.questions;
    console.log(quiz);
    return (
        <div>
            
        </div>
    );
};

export default QuizDetails;