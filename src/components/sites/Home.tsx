import { Container, Box } from "@mui/material";
import Footer from "./Footer";

export default function Home() {
  return (
    <Container disableGutters maxWidth={false} sx={{ padding: 0 }}>
      <Box width={"100%"} sx={{ padding: 0 }} margin={"auto"}>
        {" "}
        <img
          width={"100%"}
          height={"500px"}
          src="https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></img>
      </Box>
      <Box></Box>
      <Footer />
    </Container>
  );
}
