import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Box from './Box';
import Button from './Button';
import Select from './Select';

const App = () => {

  const selectedItems = []

  const [color, setColor] = useState('pink');
  const [text, setText] = useState('');
  const [allItemsList, setAllItemsList] = useState([]);

  const getSelectContries = async () => {
    const response = await axios({
      method: 'get',
      url: 'https://restcountries.eu/rest/v2/all',
      responseType: 'JSON'
    })
    const {data} = response;
    selectedItems.push(data);
    console.log(selectedItems);
    setAllItemsList(data);
  };

  useEffect(() => {getSelectContries()}, []);

  return (
    <div className="App">
      <Box color={color} />
      <Button setColor={setColor} color={color} setText={setText} text={text.label} />
      <Select 
        allItemsList={allItemsList} 
        setAllItemsList={setAllItemsList} 
        fullList={selectedItems} 
        emptyAlert='nothing to show' 
        keys='numericCode' 
        options='name' 
        setText={setText} 
        text={text}
      />
    </div>
  );
}

export default App;


///////////////////////
import React, { useState } from 'react';
import './App.css';
import Box from './Box';
import Button from './Button';
import Select from './Select';

const App = () => {

  const [color, setColor] = useState('pink');
  const [text, setText] = useState(' ');

  const fullData = [
   {id: '0', ff: 'rr', label: 'meow', value: '10'},
   {id: '1', ff: 'tt', label: 'gav', value: '20'}, 
   {id: '2', ff: 'yy', label: 'purpur', value: '30'},
   {id: '3', ff: 'zz', label: 'brrr', value: '40'},
   {id: '4', ff: 'xx', label: 'auauau', value: '50'}, 
   {id: '5', ff: 'cc', label: 'frrfrrr', value: '60'},
  ]


  return (
    <div className="App">
      <Box color={color} />
      <Button setColor={setColor} color={color} setText={setText} text={text.label} />
      <Select 
        fullData={fullData} 
        emptyAlert='nothing to show' 
        keys='id' 
        options='label' 
        setText={setText} 
      />
    </div>
  );
}

export default App;
