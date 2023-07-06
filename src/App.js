import React, { useState } from 'react';

const NumberTable = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [tableData, setTableData] = useState([]);

  const generateTable = () => {
    const table = [];
    // Generate table data based on the input number
    for (let i = 1; i <= inputNumber; i++) {
      table.push(
        <tr key={i} style={{ border: '1px solid black' }}>
          <td>{i}</td>
        </tr>
      );
    }
    setTableData(table);
  };

  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
    generateTable();
  };

  return (
    <div>
      <input type="number" value={inputNumber} onChange={handleInputChange} />
      <table style={{ border: '1px solid black' }}>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

export default NumberTable;
