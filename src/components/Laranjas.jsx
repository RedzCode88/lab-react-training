import React, { useState } from 'react';

const laranjasIniciais = 10;

function Laranjas() {

  const [laranjas, setLaranjas] = useState(10);

  const handleClick = () => {
    console.log('comi uma laranja 🍊 Tenho !!' + laranjas);
    if (laranjas < 0) {
      setLaranjas(laranjas - 1);
    }
  };

  const addLaranja = () => {
    setLaranjas(laranjas++);
  };

  const reset = () => {
    setLaranjas(laranjasIniciais);
  };

  const numEmoji = () => {
    console.log();
  };

  const getClassLaranjas = () => {
    if ((laranjas = 0)) return "none";
    else if (laranjas == 1 || laranjas == 2) return 'low';
    else if (laranjas >= 3) return 'normal';
    else return '';
  };

  return (
    <div className={`laranjas ${getClassLaranjas}`}>
      <div className="laranjas-text">{'🍊'.repeat(laranjas)}</div>
      <div className="actions">
        <button onClick={handleClick}>Comer Laranja</button>
        <button onClick={addLaranja}>Adicionar Laranja</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Laranjas;
