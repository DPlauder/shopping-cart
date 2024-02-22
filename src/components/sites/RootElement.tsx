import { Container, Typography, Grid, Button } from "@mui/material";
import { Outlet, NavLink, Link } from "react-router-dom";
import CartItemContext from "../controller/CartContext";

export default function RootElement() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {" "}
          <Typography variant="h4">My Shop Site</Typography>
        </Grid>
        <Grid item xs={2}>
          <NavLink to="/">
            <Button>
              <Typography>Home</Typography>
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={2}>
          <Link to="/shop">
            <Button>
              <Typography>Shop</Typography>
            </Button>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <NavLink to="/cart">
            <Button>
              <Typography>CART</Typography>
            </Button>
          </NavLink>
        </Grid>
      </Grid>
      <div id="content">{<Outlet />}</div>
    </Container>
  );
}
