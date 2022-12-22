import { createContext, CSSProperties } from 'react';

import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandles } from '../interfaces/interfaces';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[]; // puede recibir un solo elemento o un arreglo de varios
  children: ( args: ProductCardHandles) => JSX.Element,
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
};

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ product, onChange, value, initialValues });

  return (
    <Provider value={{
      counter,
      increaseBy,
      maxCount,
      product
    }}>
      <div className={ `${styles.productCard} ${ className }` } style={ style }>
        { children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        }) }
        {/* <ProductImage img={ product.img } />
        <ProductTitle title={ product.title } />
        <ProductButtons counter={ counter } increaseBy={ increaseBy } /> */}
      </div>
    </Provider>
  )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;