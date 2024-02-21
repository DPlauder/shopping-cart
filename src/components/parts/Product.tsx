import { IProduct } from "../ts/interfaces/global_interfaces";
import { Typography, Card, CardContent, IconButton, Grid } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
interface Props {
  product: IProduct;
}

export default function Product({ product }: Props) {
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <img src={product.image} width={100} />
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
