import { IProduct } from "../ts/interfaces/global_interfaces";
import useProducts from "../controller/useProducts";
import { redirect } from "react-router-dom";

export async function loader({ params }: { params: { id: string } }) {
  const [, , getProduct] = useProducts();
  const product = await (getProduct as (id: string) => Promise<IProduct>)(
    params.id
  );
  if (!product) {
    throw new Response("Product not found", {
      status: 404,
      statusText: "Not Found",
    });
  }
  //return redirect(`/shop/${params.id}`);
  return { product };
}

export default function ProductDetail() {
  return (
    <>
      <h1>hello detail</h1>
      <p>{}</p>
    </>
  );
}
