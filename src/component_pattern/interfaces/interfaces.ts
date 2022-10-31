import { ReactElement } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";

// export interface Props {
//   product: Product;
//   children?: ReactElement | ReactElement[];
// } necesitamos que estas props en ProductCard sean más especificas:-> para que sean mas faciles de leer:
export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

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

//la idea es definir la interfaz de ProductCard linea 14 del index de components:
export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}

