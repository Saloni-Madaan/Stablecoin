import data from "./data";
import {useLocation,Link} from "react-router-dom";
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
    // width: "100vw",
    // height: "100vh",
    // backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
    borderCollapse: 'separate',
    borderSpacing: '0px 4px',
    
  },
  td : {
    width: "100px",
    textAlign: "center",
    // border: "1px solid black",
    padding: "3px",
  },
}));

const Funds = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <TableContainer component={Paper}>
          <Table>
            {/* <TableHead>
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
            </TableHead> */}
            <TableBody justify="center" className={classes.td}>
              {data.map((curElem, index) => (
                <TableRow key={index}>
                  {/* <TableCell>
                    <b>{curElem.name}</b>
                  </TableCell>
                  <TableCell>{curElem.description}</TableCell>
                  <TableCell>{curElem.value}</TableCell>
                  <TableCell>{curElem.currency}</TableCell>
                  <TableCell>{curElem.date}</TableCell> */}
                  <TableCell style={{ marginLeft: 1000 }}>
                    <b>Fidelity Personal Investing accounts</b> <br></br>
                    <h2 style={{ font: "10" }, { color: "#006193" }}>  {curElem.name} </h2>
                    AN123456789
                  </TableCell>

                  <TableCell ><b style={{fontSize:20}}>{curElem.value}</b><br></br>
                    Investments + total cash & coins</TableCell>

                  <TableCell><b style={{fontSize:20}}>{curElem.currency}</b><br></br>
                    Gain/loss</TableCell>

                  <TableCell>
                    <h3  style={{
                      flexDirection: "row",
                      justifyContent: "flex-end"
                    }}><Link to={{pathname:"dashboard/deal"}}>></Link>  </h3>
                  </TableCell>
                
                  {/* <TableCell>
                    <button className="container bg-green-light">add</button>
                  </TableCell> */}
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