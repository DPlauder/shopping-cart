import { IProduct } from "../ts/interfaces/global_interfaces";
import { Typography, Card, CardContent, IconButton, Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { NavLink } from "react-router-dom";
interface Props {
  product: IProduct;
}

export default function ProductItem({ product }: Props) {
  return (
    <Grid item xs={3}>
      <Card>
        <CardContent>
          <img src={product.image} width={"100%"} height={250} />
          <Typography
            component="h2"
            variant="h6"
            height={100}
            mt={"50px"}
            mb={"50px"}
          >
            {product.title}
          </Typography>
          <Typography component="h2" variant="h6">
            {`€ ${product.price}`}
          </Typography>
        </CardContent>
        <IconButton>
          <AddShoppingCartIcon />
        </IconButton>
        <NavLink to={`/shop/${product.id}`}>To Item</NavLink>
      </Card>
    </Grid>
  );
}
