import { IProduct } from "../ts/interfaces/global_interfaces";
import { getProduct } from "../controller/handleProducts";
import { useLoaderData, useNavigate } from "react-router-dom";
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
  const { product } = useLoaderData() as any;
  const [, , handleAdd] = useContext(CartItemContext);
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent sx={{ display: "flex", flexDirection: "row", gap: "30px" }}>
        <Box>
          <img src={product.image} width={300} />
        </Box>
        <Box>
          <Typography variant="h5" mb={5}>
            {product.title}
          </Typography>
          <Typography>{product.description}</Typography>
          <Typography
            mt={15}
            mb={10}
            variant="h4"
          >{`€ ${product.price}`}</Typography>
          <Button variant="contained" onClick={() => handleAdd(product)}>
            Add to Cart
          </Button>
          <Button variant="contained" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
