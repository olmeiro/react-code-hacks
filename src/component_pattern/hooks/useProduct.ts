import { useState } from "react";

export const useProduct = ( onChange?: () => void) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));

    //para evitar si onChange es null cuando llega por props:
    onChange && onChange();
  };

  return {
    counter,
    increaseBy,
  };
};
