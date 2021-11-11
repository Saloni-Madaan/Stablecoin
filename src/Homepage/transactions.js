import {
  Container,
  Paper,
  Box,
  Typography,
  CssBaseline,
  TableContainer, Table, TableBody, TableHead, TableCell
} from "@material-ui/core";
import Transaction from "./transactionApi.js";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ClassNames } from "@emotion/react";
import { TableRow } from "@mui/material";

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
  const [transactionData, setTransactionData] = useState(Transaction)
  return (

    <>
    <Container className={classes.root}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction Id</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>Paid Amount</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Wallet Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionData.map((curElem)=>(
            <TableRow>
              <TableCell>{curElem.transaction_id}</TableCell>
              <TableCell>{curElem.items}</TableCell>
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
    // <div className="Transaction">
    //   <h1>Transactions Page</h1>          
    //   {transactionData.map((curElem)=>{
    //             // console.log(curElem)
    //             return(        
    //              <div className="Transaction_" key={curElem.transaction_id}>
    //                       <span className="transaction-id">{curElem.transaction_id}</span><br/>
    //                       <span className="transaction-items">{curElem.items}</span><br/>
    //                       <span className="transaction-totalAmount">{curElem.totalAmount}</span><br/>
    //                       <span className="transaction-paidAmount">{curElem.paidAmount}</span><br/>
    //                       <span className="transaction-currency">{curElem.currency}</span><br/>
    //                       <span className="transaction-state">{curElem.state}</span><br/>
    //                       <span className="transaction-date">{curElem.date}</span><br/><br></br>

    //                   </div>
    //             )
    //             }) }
    // </div>
  );
};
export default Transactions;