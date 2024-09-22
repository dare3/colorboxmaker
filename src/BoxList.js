// BoxList.js
import './BoxList.css';
import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }]);
  };

  const removeBox = (id) => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  };

  return (
    <div className="box-list">
      <h2>Create a New Box</h2>
      <NewBoxForm addBox={addBox} />
      <div className="boxes-container">
        {boxes.map(box => (
          <Box 
            key={box.id} 
            id={box.id} 
            width={box.width} 
            height={box.height} 
            backgroundColor={box.backgroundColor} 
            removeBox={removeBox} 
          />
        ))}
      </div>
    </div>
  );
}

export default BoxList;
