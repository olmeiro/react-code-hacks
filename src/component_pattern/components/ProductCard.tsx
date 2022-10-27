import { createContext, ReactElement, useContext } from 'react';

import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct';
import noImage from '../assets/no-image.jpg';

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[]
}

interface Product {
  id: string;
  title: string;
  img?: string
}

//interface del context:
interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product
}

//usamos createContext para pasar info a los hijos:
const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductImage = ({ img = '' }) => {

  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = noImage;
  }

  return (
    <img className={styles.productImg} src={imgToShow} alt="product image" />
  )
}

export const ProductTitle = ({ title }: { title?: string }) => {

  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  )
}

// interface ProductButtonProps {
//   increaseBy: (value: number) => void,
//   counter: number
// } ya no es necesaria esta interfaz

export const ProductButtons = () => {

  const { counter, increaseBy } = useContext(ProductContext)

  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
      > - </button>
      <div className={styles.countLabel}> {counter} </div>
      <button
        className={styles.buttonAdd}
        onClick={() => increaseBy(1)}
      > + </button>
    </div>
  )
}

// 1_Ahora Product Card recibe children y se hace un HOC: 
export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct()
  return (
    <Provider value={{
      counter, increaseBy, product
    }}>
      <div className={styles.productCard} >
        {children}
      </div>
    </Provider>
  )
}

//Añadimos las propiedad a ProductCard que seran consumidas en ShoppingPage
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
