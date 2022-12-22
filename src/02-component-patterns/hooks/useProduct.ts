import { useState, useEffect } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface  useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  //const isMounted = useRef(false);

  // useEffect(() => {
  //   isMounted.current = true;
  // }, []);

  useEffect(() => {
    //if (!isMounted.current) return;
    setCounter(initialValues?.count || value);
  }, [value]);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    
    newValue = initialValues?.maxCount ? Math.min(newValue, initialValues?.maxCount) : newValue;
    setCounter(newValue);
    onChange && onChange({ product, count: newValue }); // Si la definición de onChange es null | undefined, no se ejecuta
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  return { 
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    
    increaseBy,
    reset,
  };
}

export default useProduct;
