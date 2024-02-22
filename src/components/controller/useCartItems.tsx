import { useState } from "react";
import { IProduct } from "../ts/interfaces/global_interfaces";

export default function useCartItems() {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  function handleAdd(cartItem: IProduct) {
    console.log("hello add", cartItem);
    let clone = [...cartItems];
    clone.push(cartItem);
    setCartItems(clone);
    console.log(clone);
  }
  function handleDelete(cartItem: IProduct) {
    setCartItems((prevItem) =>
      prevItem.filter((prevItem) => prevItem.id !== cartItem.id)
    );
  }

  return [cartItems, setCartItems, handleAdd, handleDelete];
}
