import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter(count => Math.max(count + value, 0));
  };

  return { counter, increaseBy };
}

export default useProduct;
