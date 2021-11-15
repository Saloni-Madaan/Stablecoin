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
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableRow } from "@mui/material";
import Headers from "./headers";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
}));

const Transactions = () => {
  const classes = useStyles();
  const [transactionData, setTransactionData] = useState(Transaction);
  const userId = localStorage.getItem("_id");
  useEffect(() => {
    axios
      .post("http://localhost:5001/getTransaction", { userId })
      .then((res) => {
        console.log("Data recived", res.data.data);
        setTransactionData(res.data.data);
      });
  }, []);
  return (
    <>
      <Headers />

      <div style={{textAlign:"center"}}>
    <h3> Transactions </h3>
</div>


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
                {/* <TableCell>Wallet Address</TableCell> */}
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
                  <TableCell>{curElem.createdAt}</TableCell>
                  {/* <TableCell>{curElem.address}</TableCell> */}
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
