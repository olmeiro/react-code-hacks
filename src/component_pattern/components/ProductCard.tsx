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

export const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct()
  return (
    <div className={styles.productCard} >
      <img className={styles.productImg} src={product.img ? product.img : noImage} alt="coffee mug" />
      <span className={styles.productDescription}>{product.title}</span>

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

    </div>
  )
}

// Esta es la manera tradicional de hacer componentes, vemos que tiene muchos styles, además es complicado informarle al padre sobre cambios, además como desarrolladores no tienen control al respecto, solo mandan el producto. Si tenemos una tarjeta que nos avise sobre que productos se han agregado al carrito va ser un problema interactuar con el y este componente.