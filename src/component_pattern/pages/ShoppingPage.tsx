import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

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
        {/* forma 1 */}
        <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        {/* forma 2 */}
        {/* Vamos habilitar el className en este HOC */}
        <ProductCard 
          product={product}
          className='bg-dark text-white'
        >
          <ProductImage className='custom-image ' />
          <ProductTitle className='custom-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

      </div>
    </div>
  )
}
