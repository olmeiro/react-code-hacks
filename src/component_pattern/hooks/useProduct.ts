import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductsArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: useProductsArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef( !!onChange )

  const increaseBy = (value: number) => {
    // console.log("isControlled: ", isControlled.current) si eliminamos en ShoppingPage el onChange={(event) => onProductCountChange(event)} ahora será false.

    // if (isControlled.current && onChange){ // <-- para asegurar que onChange tiene valor 
    if (isControlled.current){ // ahora usando Ts en la linea siguiente para que onChange tenga valor->
      return onChange!({ count: value, product })  // el signo ! es para decirle a TS que siempre habrá un valor y no será null o undefined, esta linea es más eficiente que la linea 18.
    }
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
