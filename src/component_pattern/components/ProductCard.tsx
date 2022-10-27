import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct';
import noImage from '../assets/no-image.jpg';

interface Props {
  product: Product
}

interface Product {
  id: string;
  title: string;
  img?: string
}

export const ProductImage = ({ img = '' }) => { // este string vacío hace la imagen opcional, esto para no usar interface.
  return (
    <img className={styles.productImg} src={img ? img : noImage} alt="product image" />
  )
}

export const ProductTitle = ({ title }: { title: string }) => { //esto obliga a que venga el titulo, si hay más props creo una interface.
  return (
    <span className={styles.productDescription}>{title}</span>
  )
}

interface ProductButtonProps {
  increaseBy: (value) => void,
  counter: number
}

const ProductButtons = ({ counter, increaseBy }: ProductButtonProps) => {
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

export const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct()
  return (
    <div className={styles.productCard} >
      <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} />
    </div>
  )
}
