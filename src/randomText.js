import React, { useState } from 'react';
import { randomName } from './bio gnr file/nameData';
// import BioGnr from './BioGnr';



const RandomTextGenerator = ({name}) => {
  const texts = randomName;

  const [randomText, setRandomText] = useState('');
   
  const generateRandomText = () => {
    name(randomText.name)
    const rIndex = Math.floor(Math.random() * texts.length);
    const sText = texts[rIndex];
    setRandomText(sText);
  };

  return (
    <div>
      <button onClick={generateRandomText}>Random name</button>
      {/* <p>randon name :{randomText.name} </p> */}
    </div>
  );
};

export default RandomTextGenerator;
