import data from "./data";
import Cart from "./cart";
//import ReactDOM from "react-dom";
import { useHistory , Link} from "react-router-dom";
import {
  Container,
  Paper,
  Box,
  Typography,
  CssBaseline,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableRow } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    // backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
}));


const Funds = () => {
  const [dat, setData] = useState('');
  
  // const ret=()=>{
  //   return(
  //    <> <Link to={{pathname: "/dashboard/cart",state:"hello",}}/></>
  //   )
  // }
  const classes = useStyles();
// let car=()=>{
//   return(
//       <Cart cartItems={nm=[1,2,3]}/>
//   )
// }
  return (
    <>
    {/* <><Cart parentToChild={dat}/></> */}
      <Container className={classes.root}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Name</b>
                </TableCell>
                <TableCell>
                  <b>Description</b>
                </TableCell>
                <TableCell>
                  <b>Amount</b>
                </TableCell>
                <TableCell>
                  <b>Currency</b>
                </TableCell>
                <TableCell>
                  <b>Date</b>
                </TableCell>

                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody justify="center">
              {data.map((curElem, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <b>{curElem.name}</b>
                  </TableCell>
                  <TableCell>{curElem.description}</TableCell>
                  <TableCell>{curElem.value}</TableCell>
                  <TableCell>{curElem.currency}</TableCell>
                  <TableCell>{curElem.date}</TableCell>
                  <TableCell>
                  {/* <Link to={{pathname: "/dashboard/cart",state:index,}}>Add</Link> */}
                  <Link to={{pathname: "/dashboard/deal",state:index,}}>Add</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
export default Funds;
