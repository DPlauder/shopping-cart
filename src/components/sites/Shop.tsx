import useProducts from "../controller/useProducts";
import ProductItem from "../parts/ProductItem";
import { IProduct } from "../ts/interfaces/global_interfaces";
import { Container, Grid } from "@mui/material";

export default function Shop() {
  const [products, err] = useProducts();
  if (err !== null) {
    return <Container>{(err as Error).message}</Container>;
  } else {
    return (
      <Grid container spacing={2}>
        {(products as IProduct[]).map((product: IProduct): JSX.Element => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </Grid>
    );
  }
}
