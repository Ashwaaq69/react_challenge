import React from 'react';

function Exer() {
  // Declare the color variables
  const color1 = '#518cef';
  const color2 = '#3b10c4';
  const color3 = '#a30dd0';

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hexadecimal Colors</h1>
      <div
        style={{
          margin: '20px auto',
          width: '400px',
          height: '100px',
          backgroundColor: color1,
          color: '#fff',
          lineHeight: '100px',
          textAlign: 'center',
          borderRadius: '5px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '10px'
        }}
      >
        {color1}
      </div>
      <div
        style={{
          margin: '20px auto',
          width: '400px',
          height: '100px',
          backgroundColor: color2,
          color: '#fff',
          lineHeight: '100px',
          textAlign: 'center',
          borderRadius: '5px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom: '10px'
        }}
      >
        {color2}
      </div>
      <div
        style={{
          margin: '20px auto',
          width: '400px',
          height: '100px',
          backgroundColor: color3,
          color: '#fff',
          lineHeight: '100px',
          textAlign: 'center',
          borderRadius: '5px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        {color3}
      </div>
      
    </div>
  );
}

export default Exer;
