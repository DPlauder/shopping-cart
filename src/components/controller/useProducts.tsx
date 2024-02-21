import { useState, useEffect } from "react";
import { IProduct } from "../ts/interfaces/global_interfaces";

export default function useProducts() {
  const [products, setProducts] = useState([{}]);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    const options = {
      method: "GET",
      header: { "Content-Type": "application/json" },
    };
    (async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products", options);
        if (!data.ok) {
          throw new Error("Sorry, we couldn't connect to our server!");
        }
        setProducts((await data.json()) as IProduct[]);
      } catch (error) {
        setErr(error as Error);
      }
    })();
  }, []);
  async function getProduct(id: string) {
    let product: IProduct = await fetch(
      `https://fakestoreapi.com/products/${id}`
    ).then((res) => res.json());
    return product;
  }

  return [products, err, getProduct];
}
