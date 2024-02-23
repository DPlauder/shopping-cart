import useProducts from "../controller/useProducts";
import ProductItem from "../parts/ProductItem";
import { IProduct } from "../ts/interfaces/global_interfaces";
import { Container, Grid } from "@mui/material";
import Footer from "./Footer";

export default function Shop() {
  const [products, err] = useProducts();
  if (err !== null) {
    return <Container>{(err as Error).message}</Container>;
  } else {
    return (
      <Container disableGutters maxWidth={false} sx={{ padding: "0px" }}>
        <Grid container spacing={4} mt={"50px"} padding={"50px"}>
          {(products as IProduct[]).map((product: IProduct): JSX.Element => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </Grid>
        <Footer />
      </Container>
    );
  }
}
