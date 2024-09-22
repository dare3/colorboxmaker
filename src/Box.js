// Box.js
import './Box.css';
import React from 'react';

function Box({ id, width, height, backgroundColor, removeBox }) {
  const handleRemove = () => removeBox(id);

  return (
    <div className="box">
      <div 
        style={{ 
          width: `${width}px`, 
          height: `${height}px`, 
          backgroundColor: backgroundColor 
        }}
      />
      <button className="remove-btn" onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;
