import { IProduct } from "../ts/interfaces/global_interfaces";
import { Typography, Card, CardContent, IconButton, Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NavLink } from "react-router-dom";
interface Props {
  product: IProduct;
}

export default function ProductItem({ product }: Props) {
  console.log(product);
  return (
    <Grid item xs={3}>
      <NavLink to={`shop/${product.id}`}>To Item</NavLink>
      <Card>
        <CardContent>
          <img src={product.image} />
          <Typography component="h2" variant="h6">
            {product.title}
          </Typography>
          <Typography component="h2" variant="h6">
            {product.price}
          </Typography>
        </CardContent>

        <IconButton>
          <AddShoppingCartIcon />
        </IconButton>
      </Card>
    </Grid>
  );
}
