import { useState, useEffect, useRef } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface  useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({product, onChange, value = 0}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  // const isControlled = useRef(!!onChange);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {

    // if (isControlled.current) {
    //   return onChange!({ count: value, product }); // el signo de admiración es para que no emita alerta por considerar que puede venir un undefine
    // }
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ product, count: newValue }); // Si la definición de onChange es null | undefined, no se ejecuta
  };

  return { counter, increaseBy };
}

export default useProduct;
