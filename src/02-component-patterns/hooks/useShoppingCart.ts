import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({}); // Los corchetes es para indicar que puede recibir N cantidad de llaves
  //   '1': { ...product1, count: 10},
  //   '2': { ...product2, count: 1},
  // });
  const onProductCountChange = ({ count, product }: {count: number, product: Product}) => {
    
    setShoppingCart(oldShoppingCart => {
      
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0};

      // if (Math.max(productInCart.count + count, 0) > 0) {
      //   productInCart.count += count;
      //   return {
      //     ...oldShoppingCart,
      //     [product.id]: productInCart,
      //   }
      // }

      // // si es cero, pasa aqui para borrar el registro
      // const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      // return rest;

      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
          ...oldShoppingCart,
          [product.id]: { ...product, count },
        }
    })
  };

  return {
    shoppingCart,
    onProductCountChange,

  }
}
