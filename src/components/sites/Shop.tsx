import useProducts from "../controller/useProducts";
import Product from "../parts/Product";
import { IProduct } from "../ts/interfaces/global_interfaces";
import { Container, Grid } from "@mui/material";

export default function Shop() {
  const [products, err] = useProducts();
  return (
    <Grid container spacing={2}>
      {(products as IProduct[]).map((product: IProduct) => {
        return <Product key={product.id} product={product} />;
      })}
    </Grid>
  );
}
