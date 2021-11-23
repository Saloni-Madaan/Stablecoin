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
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
    overflow: "auto",
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
  const [transactionData, setTransactionData] = useState([]);
  const userId = localStorage.getItem("_id");
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    axios
      .post("http://localhost:5001/getTransaction", { userId })
      .then((res) => {
        const data = res.data.data;
        console.log("Data recived", data);
        setTransactionData(data);
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

      {transactionData ? (
        <Container className={classes.root}>
          <TableContainer component={Paper}>
            <Table colSpan={4}>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell style={{ width: 50 }} >Link</TableCell>
                  {/* <TableCell>Items</TableCell> */}
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Amount</TableCell>
                  </TableRow>
                  <TableCell>Paid Amount</TableCell>
                  <TableCell>Currency</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody justify="center">
                {transactionData.map((curElem) => (
                  <ExpandableTableRow
                    key={curElem.blockHash}
                    expandComponent={
                      <TableCell >

                        Total Amount {" "}: {curElem.totalAmount} <br/>
                        
                        {/* Wallet Id: {curElem.wallet._id}<br />
                        Wallet Key: {curElem.wallet.key}<br />
                        Wallet Created: {curElem.wallet.created}<br /> */}
                        Expires: {curElem.expires}, <br /> {" "}
                        Created: {curElem.created},<br />
                        state: {curElem.state},<br />
                        confirmBlock: {curElem.confirmBlock},<br />
                        _id: {curElem._id},<br />
                        _rev: {curElem._rev},<br />
                       
                      </TableCell>
                    }
                  >

                    
                    <TableCell style={{ width: 50 }}>
                      <a
                        href={`https://rinkeby.etherscan.io/tx/${curElem.blockHash}`}
                        target="_blank"
                      >
                        {curElem.blockHash}
                      </a>
                    </TableCell>
                    <TableCell>
                      {curElem.items.map((Elem) => (
                        <TableRow>
                          <TableCell>{Elem.description}</TableCell>
                          <TableCell>{Elem.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableCell>
                    
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

// function SimpleBackdrop() {
//   const [open, setOpen] = React.useState(false);
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleToggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <div>
//       <Backdrop
//         sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={open}
//         onClick={handleClose}
//       >
//         <CircularProgress color="inherit" />
//       </Backdrop>
//     </div>
//   );
// }
