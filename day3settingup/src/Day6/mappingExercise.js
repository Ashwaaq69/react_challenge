import React from 'react';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getColor = (num) => {
  if (isPrime(num)) return 'red';
  if (num % 2 === 0) return 'green';
  return 'yellow';
};

const NumberTable = ({ numbers }) => {
  const rows = [];
  for (let i = 0; i < numbers.length; i += 8) {
    rows.push(numbers.slice(i, i + 8));
  }

  return (
    <table>
      
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((num) => (
              <td key={num} style={{ backgroundColor: getColor(num), padding: '20px' }}>
                {num}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ColorTable = ({ colors }) => {
    const rows = [];
    for (let i = 0; i < colors.length; i += 8) {
      rows.push(colors.slice(i, i + 8));
    }

    return (
        <table>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((color, colorIndex) => (
                  <td key={colorIndex} style={{ backgroundColor: color, padding: '10px' }}>
                    {color}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    };

    const BarGroup = ({ data }) => {
        const maxPopulation = Math.max(...data.map(item => item.population));
      
        return (
          <div>
            {data.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ width: '150px' }}>{item.country}</div>
                <div style={{ height: '20px', width: `${(item.population / maxPopulation) * 100}%`, backgroundColor: 'orange', marginRight: '10px' }}></div>
                <div>{item.population.toLocaleString()}</div>
              </div>
            ))}
          </div>
        );
      };
    
export default function MappingExercise() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,];

const hexColors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF5', '#FF8C33', '#8CFF33',
    '#338CFF', '#FF338C', '#8C33FF', '#33FF8C', '#FF5733', '#33FF57', '#3357FF', '#FF33A1',
    '#A133FF', '#33FFF5', '#FF8C33', '#8CFF33', '#338CFF', '#FF338C', '#8C33FF', '#33FF8C',
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF5', '#FF8C33', '#8CFF33'
  ];

  const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ];

  return (
    <div>
      <h1> 30 Days of react</h1>
      <h2>number generator</h2> 
      <NumberTable numbers={numbers} /> 
      <h2>Hexadecimal Color Generator</h2>
      <ColorTable colors={hexColors} />
      <h2>Ten Highest Population</h2>
      <BarGroup data={tenHighestPopulation} />
    </div>
  );
}