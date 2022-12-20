import { useState } from 'react';
import { json } from 'stream/consumers';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';
import { products } from '../data/productsData';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {
  const {
    shoppingCart,
    onProductCountChange,
  } = useShoppingCart();

  

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        
        {
          products.map(product => (
            <ProductCard 
              key={ product.id }
              product={ product }
              className="bg-dark text-white"
              onChange={ onProductCountChange }
              value={ shoppingCart[product.id] && shoppingCart[product.id].count }
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>
      <div className="shopping-cart">
        {
          shoppingCart ? (
            Object.entries(shoppingCart).map(([key, product]) => (
              <ProductCard 
                key={ key }
                product={ product }
                className="bg-dark text-white"
                style={{ width: '100px'}}
                onChange={ onProductCountChange }
                value={ product.count }
              >
                <ProductImage className="custom-image" />
                <ProductButtons className="custom-buttons" />
              </ProductCard>
            ))
          ) : null
        }
      </div>
    </div>
  )
}
