import React, { useState, useEffect } from 'react';
import './App.css';
import Box from './Box';
import Button from './Button';
import Select from './Select';

const App = () => {

  const [color, setColor] = useState('pink');
  const [fullData, setFullData] = useState([])

  const APIurl = 'https://restcountries.eu/rest/v2/all';
  
  const getSelectCountries = () => {
    fetch(APIurl) 
      .then(result => result.json())
      .then(
        (result) => {
          setFullData(result)
        }
      )
  } 
  
  useEffect(() => {getSelectCountries()}, []);


  return (
    <div className="App">
      <Box color={color} />
      <Button setColor={setColor} color={color} />
      {fullData.length > 0 && <Select 
        fullData={fullData} 
        emptyAlert='nothing to show' 
        keys='numericCode' 
        options='name' 
      />}
    </div>
  );
}

export default App;
