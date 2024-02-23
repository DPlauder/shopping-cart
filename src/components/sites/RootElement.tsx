import { Container, Typography, Grid, Button, Fab, Box } from "@mui/material";
import { Outlet, NavLink, Link } from "react-router-dom";
import CartItemContext from "../controller/CartContext";
import { useContext } from "react";

export default function RootElement() {
  const [, , , , , , getCartLength] = useContext(CartItemContext);
  return (
    <Container disableGutters maxWidth={false} sx={{ padding: "0px" }}>
      <Grid container spacing={2} padding={2} position={"sticky"}>
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
            {getCartLength() > 0 && <Fab size="small">{getCartLength()}</Fab>}
          </NavLink>
        </Grid>
      </Grid>
      <div id="content">{<Outlet />}</div>
    </Container>
  );
}
