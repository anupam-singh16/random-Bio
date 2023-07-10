import React, { useState } from 'react';
import {schoolData } from './bio gnr file/school';


const RandomLocation = ({school}) => {
  const texts = schoolData;

  const [randomText, setRandomText] = useState('');
   
  const generateRandomText = () => {
    school(randomText.school)
    const rIndex = Math.floor(Math.random() * texts.length);
    const sText = texts[rIndex];
    setRandomText(sText);
  };

  return (
    <div>
      <button onClick={generateRandomText}>Random school</button>
      {/* <p>randon name :{randomText.name}</p> */}
    </div>
  );
};

export default RandomLocation;
