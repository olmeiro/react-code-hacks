import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from '../components/ProductTitle'
import { Props as ProductImageProps}  from '../components/ProductImage'
import { Props as ProductButtonsProps}  from '../components/ProductButtons'

export interface Product {
  id: string;
  title: string;
  img?: string;
}

//interface del context:
export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

//Esta es la interfaz para el componente que aplican a ambas formas en ShoppingPage:
export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps ) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}


//types for onChage in useProduct
export interface onChangeArgs {
  product: Product;
  count: number;
}