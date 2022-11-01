import { createContext, ReactElement } from 'react';

import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className ?: string;
  style?: React.CSSProperties;
  onChange?: ( args: onChangeArgs ) => void
}

export const ProductCard = ({ children, product, className, style, onChange }: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product })
  return (
    <Provider value={{
      counter, increaseBy, product
    }}>
      <div 
        style={style}  
        className={`${styles.productCard} ${className}`} 
      >
        {children}
      </div>
    </Provider>
  )
}
