import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count - 1);
  };

  const resetClick = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter App: {count}</h1>
      <button onClick={handleClick}>Decrementar</button>
      <button onClick={resetClick}>Resetear</button>
    </div>
  );
};
