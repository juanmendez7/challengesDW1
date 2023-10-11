import { useState } from "react";

export const useCounter = (value) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const subtracts = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(value);
  };
  return {
    counter: counter,
    Increment: handleAdd,
    Decrement: subtracts,
    Reset:reset
  };
};