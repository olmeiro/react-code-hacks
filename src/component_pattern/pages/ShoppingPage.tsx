import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard"

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
        <ProductCard product={product} >
          <ProductImage />
          <ProductTitle title="" />
          <ProductButtons increaseBy={function (value: any): void {
            throw new Error("Function not implemented.")
          }} counter={0} />
        </ProductCard>

      </div>
    </div>
  )
}
export default ShoppingPage

//la pregunta es: cómo pasar la info de la prop product a los children?
//increaseBy y counter no deben estar expuestas en ProductButtons pues ya son de ProductCard para su manipulación
// ctrl + . sobre los errores para ver que sugiere TS
