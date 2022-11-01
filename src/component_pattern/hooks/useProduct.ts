import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: useProductsArgs) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue);

    //para evitar si onChange es null cuando llega por props:
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
      setCounter(value);
  }, [value])

  return {
    counter,
    increaseBy,
  };
};
