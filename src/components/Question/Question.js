
import Option from '../Option/Option';

import './Question.css'

const Question = ({questionDetails,inx,showAnswer,handleChange}) => {
    const {question, options,correctAnswer} = questionDetails ;
    
  
    return (
        <div className='question-container'>
            <div className='question-header'>
            <h4>{inx+1}. {question}</h4>
            <i onClick={()=>showAnswer(correctAnswer)} className="fa-solid fa-eye"></i>
           
            </div>
            <div className='options-container'>
                {
                    options.map((option, index) => 
                    <Option key={index} 
                    option={option}
                    correctAnswer={correctAnswer}
                    handleChange={handleChange}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Question;