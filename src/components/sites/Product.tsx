import { IProduct } from "../ts/interfaces/global_interfaces";
import { getProduct } from "../controller/handleProducts";
import { useLoaderData, NavLink } from "react-router-dom";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import CartItemContext from "../controller/CartContext";
import { useContext } from "react";

export async function loader({ params }: { params: { id: string } }) {
  const product = await (getProduct as (id: string) => Promise<IProduct>)(
    params.id
  );
  if (!product) {
    throw new Response("Product not found", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { product };
}

export default function ProductDetail() {
  const { product } = useLoaderData();
  const [, , handleAdd] = useContext(CartItemContext);

  return (
    <Card>
      <CardContent sx={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        <Box>
          <img src={product.image} width={300} />
        </Box>
        <Box>
          <Typography>{product.title}</Typography>
          <Typography>{product.description}</Typography>
          <Typography>{`€ ${product.price}`}</Typography>
          <Button onClick={() => handleAdd(product)}>Add to Cart</Button>
          <NavLink to={"/shop"}>
            <Button>Back to Shop</Button>
          </NavLink>
        </Box>
      </CardContent>
    </Card>
  );
}
