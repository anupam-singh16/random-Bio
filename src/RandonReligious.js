import React, { useState } from 'react';
import {religiousData } from './bio gnr file/religiousData';


const RandomLocation = ({data}) => {
  const texts = religiousData;

  const [randomText, setRandomText] = useState('');
   
  const generateRandomText = () => {
    data(randomText.description)
    const rIndex = Math.floor(Math.random() * texts.length);
    const sText = texts[rIndex];
    setRandomText(sText);
  };

  return (
    <div>
      <button onClick={generateRandomText}>Random religion</button>
      {/* <p>randon name :{randomText.name}</p> */}
    </div>
  );
};

export default RandomLocation;
