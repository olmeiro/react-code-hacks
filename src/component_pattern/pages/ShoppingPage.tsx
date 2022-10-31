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
        <ProductCard 
          product={product}
          className='bg-dark text-white'
         >
          <ProductCard.Image />
          <ProductCard.Title className='custom-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        {/* forma 2 */}
        <ProductCard 
          product={product}
          className='bg-dark text-white'
        >
          <ProductImage className='custom-image ' />
          <ProductTitle className='custom-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
       
       {/* Prop style in each component */}
        <ProductCard 
          product={product}
         style={{
          backgroundColor: '#70D1F8'
         }}
        >
          <ProductImage style={{
            boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.5)'
          }} />
          <ProductTitle style={{
            fontWeight: 'bold'
          }}/>
          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'end'
          }}/>
        </ProductCard>

      </div>
    </div>
  )
}
