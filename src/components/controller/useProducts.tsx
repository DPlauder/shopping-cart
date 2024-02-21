import { useState, useEffect } from "react";
import { IProduct } from "../ts/interfaces/global_interfaces";

export default function useProducts() {
  //TODO: Du hast ein Objekt in das Array initial erstellt, das ist nicht notwendig und hat den Fehler ausgelöst.
  const [products, setProducts] = useState<IProduct[]>([]);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        if (!data.ok) {
          throw new Error("Sorry, we couldn't connect to our server!");
        }
        setProducts((await data.json()) as IProduct[]);
      } catch (error) {
        setErr(error as Error);
      }
    })();
  }, []);

  return [products, err];
}
