import { useContext } from "react";
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
} from "@mui/material";
import { IProduct } from "../ts/interfaces/global_interfaces";

export default function Cart() {
  const [cartItems, , handleAdd, handleDelete] = useContext(CartItemContext);
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
                  <img src={item.image} width={100}></img>
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.ammount}</TableCell>
                <TableCell>{`€ ${item.price! * item.ammount!}`}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(item)}>Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
}
