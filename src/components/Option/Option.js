import React from 'react';
import './Option.css'

const Option = ({option}) => {
    return (
        <div className='option-container'>
              <label>
            <input
              type="radio"
              name='option'
            />
            {option}
          </label>
        </div>
    );
};

export default Option;