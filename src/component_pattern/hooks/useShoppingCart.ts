import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product}: { count:number, product: Product }) => {

    setShoppingCart( oldShoppingCart => {

      const productIntCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }  //en caso que sea null de primera.
      if (Math.max(productIntCart.count + count, 0) > 0) {
        productIntCart.count += count;

        return {
          ...oldShoppingCart,
          [product.id]: productIntCart
        }
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return {...rest};

    })
  }
  return {
    shoppingCart,
    onProductCountChange
  }
}