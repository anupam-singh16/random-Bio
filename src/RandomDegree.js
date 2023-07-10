import React, { useState } from 'react';
import {degreeData } from './bio gnr file/degree';


const RandomLocation = ({data}) => {
  const texts = degreeData;

  const [randomText, setRandomText] = useState('');
   
  const generateRandomText = () => {
    data(randomText.degree)
    const rIndex = Math.floor(Math.random() * texts.length);
    const sText = texts[rIndex];
    setRandomText(sText);
  };

  return (
    <div>
      <button onClick={generateRandomText}>Random major</button>
      {/* <p>randon name :{randomText.name}</p> */}
    </div>
  );
};

export default RandomLocation;
