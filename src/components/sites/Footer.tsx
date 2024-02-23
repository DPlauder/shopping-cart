import { Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Container
      sx={{
        mt: "50px",
        background: "gray",
        height: "100px",
        width: "100%",
      }}
      maxWidth={false}
    >
      <Typography variant="h5" textAlign={"center"} color={"white"}>
        Dominik Plauder
      </Typography>
    </Container>
  );
}
