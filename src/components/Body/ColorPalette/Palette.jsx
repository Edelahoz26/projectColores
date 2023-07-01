import React from 'react';

const Palette = ({ color, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        border: '1px solid #0000003b',
        marginRight: '10px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    ></button>
  );
};

export default Palette;
