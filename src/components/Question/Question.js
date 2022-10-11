
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css'

const Question = ({questionDetails,inx}) => {
    const {question, options,correctAnswer} = questionDetails ;
    const checkAnswer= ()=>{
        toast(correctAnswer);
    }
    function handleChange(value) {
        if(correctAnswer===value)
        {
            toast("Correct Answer");
            
        }
        else{
            toast("Wrong Answer");
        }
      }
  
    return (
        <div className='question-container'>
            <div className='question-header'>
            <h4>{inx+1}. {question}</h4>
            <i onClick={checkAnswer} className="fa-solid fa-eye"></i>
            <ToastContainer />
            </div>
            <div className='options-container'>
                {
                    options.map((option, index) => 
                    <Option key={index} 
                    option={option}
                    handleChange={handleChange}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Question;