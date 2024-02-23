import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartItemContext from "../controller/CartContext";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  Box,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IProduct } from "../ts/interfaces/global_interfaces";

export default function Cart() {
  const [cartItems, , handleAdd, handleMinus, handleDelete, handlePrice] =
    useContext(CartItemContext);
  return (
    <Container>
      <Typography>My Cart</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Article</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems?.map((item: IProduct): JSX.Element => {
            return (
              <TableRow>
                <TableCell>
                  <NavLink to={`/shop/${item.id}`}>
                    <img src={item.image} width={100}></img>
                  </NavLink>
                </TableCell>
                <TableCell>
                  <NavLink
                    to={`/shop/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography>{item.title}</Typography>
                  </NavLink>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleMinus(item)}>
                    <RemoveCircleOutlineIcon />
                  </Button>
                  {item.ammount}
                  <Button onClick={() => handleAdd(item)}>
                    <AddCircleOutlineIcon />
                  </Button>
                </TableCell>
                <TableCell>{`€ ${item.price! * item.ammount!}`}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(item)}>Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Box mr={5}>
        <Typography textAlign={"right"} mt={"10px"}>
          Total Price
        </Typography>
        <Typography
          variant="h5"
          textAlign={"right"}
        >{`€ ${handlePrice()}`}</Typography>
      </Box>
    </Container>
  );
}
