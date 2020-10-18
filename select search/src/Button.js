import React from 'react';

const Button= (props) => {
    const {setColor, color} = props;
  
    const chooseColor = () => {
        if(color === 'pink') {
        setColor('lightblue');
        } else {
          setColor('pink');
      }}
    
    return(
        <div>
            <button 
                className='btn' 
                onClick={chooseColor} 
                style={{margin: '15px'}} >
                    change color
            </button>
        </div>
    )
}

export default Button;