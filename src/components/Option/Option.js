import React from 'react';
import './Option.css'

const Option = ({option,handleChange}) => {
    return (
        <div className='option-container'>
              <label>
            <input
              type="radio"
              name='option'
              onChange={()=>handleChange(option)}
            />
            {option}
          </label>
        </div>
    );
};

export default Option;