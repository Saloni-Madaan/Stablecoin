import data from "./data";
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
  const classes = useStyles();

  return (
    <>
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
                    <button className="container bg-green-light">add</button>
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
