import React, { useState, useEffect } from 'react';

function Counter() {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    console.log('Component Start');

    setInterval(() => {
      setNumero(numero + 1);
    }, 1000);
  }, []);

  //const handleClick = () => {
  //setNumero (numero +1)
  //}

  return (
    <div>
      <button onClick={setNumero(numero + 1)}>
        Aumentar numero - {numero}
      </button>
    </div>
  );
}

export default Counter;
