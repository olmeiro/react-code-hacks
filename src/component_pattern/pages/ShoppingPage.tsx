import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'
import { Product } from '../interfaces/interfaces'
import '../styles/custom-styles.css'

const product1 = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffe Mug - Card',
  img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2]

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
       
       {
        products.map(product => (
          <ProductCard 
          key={product.id}
            product={product}
            className='bg-dark text-white'
          >
            <ProductImage className='custom-image ' />
            <ProductTitle className='custom-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))
       }
      </div>

      <div className='shopping-cart'>
      <ProductCard 
            product={product2}
            className='bg-dark text-white'
            style={{
              width: '100px'
            }}
          >
            <ProductImage className='custom-image ' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
      <ProductCard 
            product={product2}
            className='bg-dark text-white'
            style={{
              width: '100px'
            }}
          >
            <ProductImage className='custom-image ' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
      <ProductCard 
            product={product2}
            className='bg-dark text-white'
            style={{
              width: '100px'
            }}
          >
            <ProductImage className='custom-image ' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
      </div>
    </div>
  )
}
 