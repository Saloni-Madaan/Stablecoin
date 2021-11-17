import {
  Container,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  Typography,
} from "@material-ui/core";
import Transaction from "./transactionApi.js";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableRow } from "@mui/material";
import Headers from "./headers";
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
    overflow: "auto"
  },
}));

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};

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

  const [show, setShow] = useState(false);
  return (
    <>
      <Headers />

      <div style={{ textAlign: "center" }}>
        <h3> Transactions </h3>
      </div>

      {/* {showEtherScan ? (
        <Grid container justifyContent="center">
          <iframe
            src={`https://rinkeby.etherscan.io/tx/${blockHash}`}
            width="1000"
            height="400"
          />
        </Grid>
      ) : (
        <></>
      )} */}


      <Container className={classes.root}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell  />
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


              </TableRow>
            </TableHead>
            <TableBody justify="center">
              {transactionData.map((curElem) => (

               
                  <ExpandableTableRow
                    key={curElem.transaction_id}
                    expandComponent={<TableCell colSpan="5">
                     User wallet address:  {curElem.userWalletAddress}, <br /> Total  {curElem.wallet}
                    </TableCell>}
                  >
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

                 </ExpandableTableRow>



              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
export default Transactions;
