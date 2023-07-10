import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    
   
   
    // const file = event.target.files[0];
    // if (file && file.type.startsWith('image/')) {
    //   setSelectedImage(file);
    // } else {
    //   setSelectedImage(null);
    //   // Show an error message or perform any desired actions for invalid file types
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the upload logic with the selectedImage
    if (selectedImage) {
      // Example: Upload the selectedImage using an API or store it in the state
      console.log('Uploading image:', selectedImage);
    }
  };

  return (
    <div>
      <form >
        <input type="file" accept="image/*" onChaselectedImagenge={handleImageChange} />
         <img src={selectedImage} />
        <button type="submit" onSubmit={handleSubmit} >Upload</button>
      </form>
    </div>
  );
};

export default ImageUploader;
