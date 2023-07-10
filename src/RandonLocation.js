import React, { useState } from 'react';
import {locationData } from './bio gnr file/locationData';


const RandomLocation = ({location}) => {
  const texts = locationData;

  const [randomText, setRandomText] = useState('');
   
  const generateRandomText = () => {
    location(randomText.location)
    const rIndex = Math.floor(Math.random() * texts.length);
    const sText = texts[rIndex];
    setRandomText(sText);
  };

  return (
    <div>
      <button onClick={generateRandomText} style={{border:"transparent"}} >Random location</button>
      {/* <p>randon name :{randomText.name}</p> */}
    </div>
  );
};

export default RandomLocation;
