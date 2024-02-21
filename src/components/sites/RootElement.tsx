import { Container, Typography, Grid, Button } from "@mui/material";
import { Outlet, NavLink, Link } from "react-router-dom";

export default function RootElement() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {" "}
          <Typography variant="h4">My Shop Site</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button>
            <NavLink to="/">Home</NavLink>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button>
            <Link to="/shop">text</Link>
          </Button>
        </Grid>
      </Grid>
      <div id="content">{<Outlet />}</div>
    </Container>
  );
}
