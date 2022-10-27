// import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard"

// import { ProductCard } from "../components/ProductCard"
// import { ProductImage } from "../components/ProductImage"
// import { ProductTitle } from '../components/ProductTitle';
// import { ProductButtons } from '../components/ProductButtons'; Para evitar estas importaciones utilizamos un archivo index y usamos:

import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'

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
        {/* <ProductCard product={product} >
          <ProductCard.Image />
          <ProductCard.Title title={'Hola mundo'} />
          <ProductCard.Buttons />
        </ProductCard>
        Necesitamos corregir el error que se genera ahora hasta este punto con la comentada de las nuevas propiedades del ProductCard en las lineas 28-30 */}
        {/* forma 2 */}
        <ProductCard product={product} >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

      </div>
    </div>
  )
}
