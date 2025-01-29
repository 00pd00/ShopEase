import React, { useState } from 'react';

const CounterButton = ({ item, handleAddItems }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="my-2 mx-2">
      {count === 0 ? (
        <button
          onClick={() => {
            setCount(1);
            handleAddItems(item);
          }}
          className="border-2 rounded-md bg-blue-950 text-white border-black px-4 py-1"
        >
          Add+
        </button>
      ) : (
        <div className="flex items-center space-x-2">
          <button
            onClick={handleDecrement}
            className="border-2 rounded-md bg-red-600 text-white border-black px-2"
          >
            -
          </button>
          <span className="text-black font-bold">{count}</span>
          <button
            onClick={handleIncrement}
            className="border-2 rounded-md bg-green-600 text-white border-black px-2"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default CounterButton;
