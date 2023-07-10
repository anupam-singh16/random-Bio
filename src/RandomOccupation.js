import React, { useState } from 'react';
import {occupationData } from './bio gnr file/occupation';


const RandomOccpation = ({data}) => {
  const texts = occupationData;

  const [randomText, setRandomText] = useState('');
   
  const generateRandomText = () => {
    data(randomText.occupation)
    const rIndex = Math.floor(Math.random() * texts.length);
    const sText = texts[rIndex];
    setRandomText(sText);
  };

  return (
    <div>
      <button onClick={generateRandomText}>Random occupation</button>
      {/* <p>randon name :{randomText.name}</p> */}
    </div>
  );
};

export default RandomOccpation;
