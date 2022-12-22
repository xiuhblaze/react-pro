import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/productsData';

import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
  
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <ProductCard 
        key={ product.id }
        product={ product }
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({
            count,
            isMaxCountReached,
            increaseBy,
            reset
          }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
              <button onClick={ reset }>Reset</button>
              <button onClick={ () => { increaseBy(-2) }}> - 2 </button>
              { !isMaxCountReached ? (
                <button onClick={ () => { increaseBy(2) }}> + 2 </button>
              ) : null
              }
              <span>{ count }</span>
            </>
          )
        }
      </ProductCard>
    </div>
  )
}
