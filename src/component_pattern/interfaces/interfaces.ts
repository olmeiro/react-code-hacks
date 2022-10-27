import { ReactElement } from "react";

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
