import { useState } from 'react'
import { json } from 'react-router-dom'

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

const products: Product[] = [product1, product2];

// tipado para el useState: Podemos extender las prop de la interface:
interface ProductInCart extends Product {
  count: number
}

export const ShoppingPage = () => {

  //tipamos el useState->
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product}: { count:number, product: Product }) => {
    // console.log('onProductOnChange', count, product);
    //prohibido mutar el objeto ->
    // shoppingCart[ product.id ] = {...product, count};

    //mejor usando el set del estado->
    setShoppingCart( oldShoppingCart => {
      //console.log("oldShoppingCart", oldShoppingCart);

      // si el count es cero lo eliminamos->
      if( count  === 0 ){
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;

        return {
          ...rest
        }
      }


      return {
        ...oldShoppingCart,
        [ product.id ]: { ...product, count }
      }
    })
  }

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
            onChange={(event) => onProductCountChange(event)}
          >
            <ProductImage className='custom-image ' />
            <ProductTitle className='custom-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))
       }
      </div>

      <div className='shopping-cart'>
        {
          
        Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard 
            key={key}
            product={product}
            className='bg-dark text-white'
            style={{
              width: '100px'
            }}
        
          >
            <ProductImage className='custom-image ' />
            <ProductButtons 
              className='custom-buttons'
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            />
          </ProductCard>
          ))
        }
     
      </div>

      {/* <div>
        <code>
          {JSON.stringify(shoppingCart, null, 5)}
        </code>
      </div> */}
    </div>
  )
}
 