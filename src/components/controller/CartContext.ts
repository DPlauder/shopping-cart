import { createContext, Dispatch, SetStateAction } from "react";
import { IProduct } from "../ts/interfaces/global_interfaces";

type CartItemContextType = [
  IProduct[] | null,
  Dispatch<SetStateAction<IProduct[]>>,
  handleAdd: (product: IProduct) => void,
  handleMinus: (product: IProduct) => void,
  handleDelete: (product: IProduct) => void,
  handlePrice: () => number,
  getCartLength: () => number
];

const CartItemContext = createContext<CartItemContextType>([
  null,
  () => {},
  () => {},
  () => {},
  () => {},
  () => 0.0,
  () => 0,
]);

export default CartItemContext;
