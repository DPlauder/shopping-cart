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
    }
    if (index !== -1 && index !== undefined) {
      clone[index].ammount += 1;
    }
    setCartItems(clone);
  }
  function handleDelete(cartItem: IProduct) {
    setCartItems((prevItem) =>
      prevItem.filter((prevItem) => prevItem.id !== cartItem.id)
    );
  }
  return (
    <CartItemContext.Provider
      value={[cartItems, setCartItems, handleAdd, handleDelete]}
    >
      {children}
    </CartItemContext.Provider>
  );
}
