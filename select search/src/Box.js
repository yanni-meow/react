import React, {useState} from 'react';

const Box = ({color, text}) => {

    return (
      <div className='box' style={ {display: "flex", flexDirection: "column", backgroundColor: color} }> 
        <p className='meow' >{ text }</p>
      </div>
    )
};

export default Box;