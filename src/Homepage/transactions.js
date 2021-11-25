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
import { styled } from '@mui/material/styles';
import  { tableCellClasses } from '@mui/material/TableCell';
import Transaction from "./transactionApi.js";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableRow } from "@mui/material";
import Headers from "./headers";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import data from "./data";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
    overflow: "auto",
  },
  tableCell: {
    padding: "0px 8px"
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
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
  const [open, setOpen] = useState(true);
  const userId = localStorage.getItem("_id");
  let [reversedData, setReversedData] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    axios
      .post("http://localhost:5001/getTransaction", { userId })
      .then((res) => {
        const data = res.data.data;
        console.log("Data recived : ", data);
        setReversedData(data.reverse());
        console.log("Data reversed: ", reversedData);
        if (data !== null) {
          setOpen(true);
        }
      });
  }, []);

  return (
    <>
      <Headers />

      <div style={{ textAlign: "center" }}>
        <h3> Transactions </h3>
      </div>

      {reversedData ? (
        <Container className={classes.root}>
          <TableContainer component={Paper}>
            <Table colSpan={4} >
              <TableHead>
                <StyledTableRow>
                  <TableCell />

                  <TableCell style={{ width: 50 }}>  </TableCell>
                  {/* <TableCell>Items</TableCell> */}
                  <TableRow>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="center" >Amount</TableCell>
                  </TableRow>
                  <TableCell align="center">Paid Amount</TableCell>
                  <TableCell align="center">Currency</TableCell>
                  <TableCell align="center">State</TableCell>
                  <TableCell >Date</TableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody justify="center">
                {reversedData.map((curElem) => (
                  <ExpandableTableRow
                    key={curElem.blockHash}
                    expandComponent={
                      <TableCell colspan={7}>
                        <Typography variant="h6" gutterBottom component="div">
                          Further details
                        </Typography>

                        {/* ////////////////////////////////////////////// */}

                        <Table  >
                          <TableHead>
                            <StyledTableRow>
                              <TableCell>Total Amount</TableCell>
                              <TableCell>Wallet Id</TableCell>
                              {/* <TableCell align="right">Amount</TableCell> */}
                              
                              {/* <TableCell className={classes.tableCell} 
  style={{ width: 100 }}>Wallet Key</TableCell> */}
                              <TableCell >Wallet Created</TableCell>
                              <TableCell>Expires</TableCell>
                              <TableCell>Created</TableCell>
                              {/* <TableCell>state</TableCell> */}
                              <TableCell>confirmBlock</TableCell>
                              <TableCell>_id</TableCell>
                              <TableCell>_rev</TableCell>
                            </StyledTableRow>
                          </TableHead>
                          <TableBody>
                           
                              <TableRow >
                                <TableCell component="th" scope="row">{curElem.totalAmount}</TableCell>
                                <TableCell>{curElem.wallet._id}</TableCell>
                                {/* <TableCell className={classes.tableCell} 
  style={{ width: 100 }}>  {curElem.wallet.key}  </TableCell> */}
                                <TableCell>  {curElem.wallet.created} </TableCell>
                                <TableCell> {curElem.expires} </TableCell>
                                <TableCell> {curElem.created} </TableCell>
                                {/* <TableCell> {curElem.state} </TableCell> */}
                                <TableCell> {curElem.confirmBlock} </TableCell>
                                <TableCell> {curElem._id} </TableCell>
                                <TableCell> {curElem._rev} </TableCell>
                                {/* <TableCell align="right">{historyRow.amount}</TableCell> */}
                                
                              </TableRow>
                           
                          </TableBody>
                        </Table>

                        {/* ////////////////////////////////////////////// */}



                      
                      </TableCell>
                    }
                  >
                    <TableCell style={{ width: 50 }}>
                      <a
                        href={`https://rinkeby.etherscan.io/tx/${curElem.blockHash}`}
                        target="_blank"
                      >
                        {/* {curElem.blockHash} */}
                        Etherscan Link
                        {/* {curElem.confirmBlock} */}
                      </a>
                    </TableCell>
                    <TableCell>
                      {curElem.items.map((Elem) => (
                        <TableRow>
                          <TableCell align="left">{Elem.description}</TableCell>
                          <TableCell align="left">{Elem.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableCell>

                    <TableCell align="center">{curElem.paidAmount}</TableCell>
                    <TableCell align="center">{curElem.currency}</TableCell>
                    <TableCell align="center">{curElem.state}</TableCell>
                    <TableCell>{curElem.createdAt}</TableCell>
                  </ExpandableTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      ) : (
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      )}
    </>
  );
};
export default Transactions;