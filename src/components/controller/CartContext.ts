import { createContext, Dispatch, SetStateAction } from "react";
import { IProduct } from "../ts/interfaces/global_interfaces";

type CartItemContextType = [
  IProduct[] | null,
  Dispatch<SetStateAction<IProduct[]>>,
  handleAdd: (product: IProduct) => void,
  handleDelete: (product: IProduct) => void
];

const CartItemContext = createContext<CartItemContextType>([
  null,
  () => {},
  () => {},
  () => {},
]);

export default CartItemContext;
