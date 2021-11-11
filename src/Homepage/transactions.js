import {
  Container,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
} from "@material-ui/core";
import Transaction from "./transactionApi.js";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableRow } from "@mui/material";
import Headers from "./headers";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
    // backgroundImage : "https://www.google.com/search?q=fidelity+international+for+background&tbm=isch&ved=2ahUKEwj0y5GZ_Y_0AhWRW30KHWZMCbAQ2-cCegQIABAA&oq=fidelity+international+for+background&gs_lcp=CgNpbWcQAzoECAAQQzoFCAAQgAQ6BAgAEBhQjARYuyxgui5oAHAAeACAAYcCiAHTHJIBBDItMTaYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=4d-MYbTXFZG39QPmmKWACw&bih=625&biw=1366&rlz=1C1_____en-gbIN953IN953#imgrc=Qt8Au1z4-FbnyM"
  },
}));

const Transactions = () => {
  const classes = useStyles();
  const [transactionData, setTransactionData] = useState(Transaction);
  return (
    <>
      <Headers />
      <Container className={classes.root}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Transaction Id</TableCell>
                {/* <TableCell>Items</TableCell> */}
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
                <TableCell>Total Amount</TableCell>
                <TableCell>Paid Amount</TableCell>
                <TableCell>Currency</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Wallet Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody justify="center">
              {transactionData.map((curElem) => (
                <TableRow>
                  <TableCell>{curElem.transaction_id}</TableCell>
                  <TableCell>
                    {curElem.items.map((Elem) => (
                      <TableRow>
                        <TableCell>{Elem.description}</TableCell>
                        <TableCell>{Elem.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableCell>
                  <TableCell>{curElem.totalAmount}</TableCell>
                  <TableCell>{curElem.paidAmount}</TableCell>
                  <TableCell>{curElem.currency}</TableCell>
                  <TableCell>{curElem.state}</TableCell>
                  <TableCell>{curElem.date}</TableCell>
                  <TableCell>{curElem.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
export default Transactions;
