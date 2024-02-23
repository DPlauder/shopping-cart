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

    if (index === -1) {
      cartItem.ammount = 1;
      clone.push(cartItem);
    }
    if (index !== -1 && clone[index].ammount != undefined) {
      clone[index].ammount! += 1;
    }
    setCartItems(clone);
  }
  function handleMinus(cartItem: IProduct) {
    let clone = [...cartItems];
    const index = clone.findIndex((item) => item.id === cartItem.id);
    if (clone[index].ammount! <= 1) {
      handleDelete(cartItem);
    } else {
      clone[index].ammount! -= 1;
      setCartItems(clone);
    }
  }
  function handleDelete(cartItem: IProduct) {
    setCartItems((prevItem) =>
      prevItem.filter((prevItem) => prevItem.id !== cartItem.id)
    );
  }
  function handlePrice() {
    let price = 0;
    cartItems.map((item) => (price += item.price! * item.ammount!));
    return parseFloat(price.toFixed(2));
  }
  function getCartLength() {
    return cartItems.length;
  }
  return (
    <CartItemContext.Provider
      value={[
        cartItems,
        setCartItems,
        handleAdd,
        handleMinus,
        handleDelete,
        handlePrice,
        getCartLength,
      ]}
    >
      {children}
    </CartItemContext.Provider>
  );
}
