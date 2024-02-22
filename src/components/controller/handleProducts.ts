import { IProduct } from "../ts/interfaces/global_interfaces";

async function getProduct(id: string) {
  let product: IProduct = await fetch(
    `https://fakestoreapi.com/products/${id}`
  ).then((res) => res.json());
  return product;
}

export { getProduct };
