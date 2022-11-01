import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void
}

export const useProduct = ({ onChange, product }: useProductsArgs) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue);

    //para evitar si onChange es null cuando llega por props:
    onChange && onChange({ count: newValue, product });
  };

  return {
    counter,
    increaseBy,
  };
};
