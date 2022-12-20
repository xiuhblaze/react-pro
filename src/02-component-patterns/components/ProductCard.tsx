import { createContext, CSSProperties, ReactElement } from 'react';

import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[]; // puede recibir un solo elemento o un arreglo de varios
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
};

export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {
  const { counter, increaseBy } = useProduct({ product, onChange, value });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={ `${styles.productCard} ${ className }` } style={ style }>
        { children }
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