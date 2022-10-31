import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from '../components/ProductTitle'

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

//Esta es la interfaz para el componente de forma 1 en ShoppingPage:
export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: ProductTitleProps) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: ({ className }: {className?: string}) => JSX.Element;
}

