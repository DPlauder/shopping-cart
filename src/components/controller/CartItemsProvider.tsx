import React, { useState } from "react";
import CartItemContext from "./CartContext";
import { IProduct } from "../ts/interfaces/global_interfaces";

interface Props {
  children: React.ReactNode;
}

export default function CartItemsProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  function handleAdd(cartItem: IProduct) {
    let clone = [...cartItems];
    const index = clone.findIndex((item) => item.id === cartItem.id);
    console.log(index);

    if (index === -1) {
      cartItem.ammount = 1;
      clone.push(cartItem);
    } else if (index !== -1) {
      clone[index].ammount += 1;
    }
    setCartItems(clone);
  }
  return (
    <CartItemContext.Provider value={[cartItems, setCartItems, handleAdd]}>
      {children}
    </CartItemContext.Provider>
  );
}
