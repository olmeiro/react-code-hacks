import { createContext, ReactElement, useContext } from 'react';

import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

// import { ProductImage } from './ProductImage';
// import { ProductTitle } from './ProductTitle';
// import { ProductButtons } from './ProductButtons'; Para evitar estas importaciones

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext; //envuelve el ProducCard

export const ProductCard = ({ children, product }: ProductCardProps) => {
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

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons; Esto ya no pertenece a este archivo y arrojan error de inicialización.
