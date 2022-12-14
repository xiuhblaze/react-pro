import { createContext } from 'react';

import useProduct from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={ styles.productCard }>
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