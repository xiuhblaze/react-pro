import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
};

const product2 = {
  id: '2',
  title: 'Instant Coffe',
  img: './coffee-mug.png'
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={ product } className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={ product } className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle title={ 'Café La Parroquia' } className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={ product2 } style={{ backgroundColor: '#5B5B66', color: '#fafafa'}}>
          <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}
