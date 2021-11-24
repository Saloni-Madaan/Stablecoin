import data from "./data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLocation, Link } from "react-router-dom";
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
    borderCollapse: "separate",
    borderSpacing: "0px 4px",
  },
  td: {
    width: "100px",
    textAlign: "center",
    // border: "1px solid black",
    padding: "3px",
  },
  td1: {
    height: "30px",
    width: "10px",
    textAlign: "center",
    // border: "1px solid black",
    padding: "0px",
  },
}));

const Funds = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead justify="center" className={classes.td1}>
              <TableRow
                sx={{
                  borderTop: 0,
                  borderRight: 0,
                  borderBottom: 0,
                  borderColor: "#232328",
                  borderLeftWidth: "12px",
                  borderBottomWidth: "20px",
                  borderBottomColor: "#F2F0F4",
                  borderStyle: "solid",
                }}
              >
                <TableCell style={{ marginLeft: 1000 }}>
                  <h2 style={({ font: "10" }, { color: "#146BAB" })}>
                    View all investments{" "}
                  </h2>
                </TableCell>
                <TableCell>
                  <b style={{ fontSize: 20, color: "white" }}>
                    Investments + total cash & coins
                  </b>
                </TableCell>

                <TableCell>
                  <b style={{ fontSize: 20, color: "white" }}>
                    Investments + total cash & coins
                  </b>
                </TableCell>
                <TableCell>
                  <h3
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{ pathname: "dashboard/transactions" }}
                    >
                      <ArrowForwardIosIcon fontSize="large" color="primary" />
                    </Link>{" "}
                  </h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody justify="center" className={classes.td}>
              {data.map(
                (curElem, index) => (
                  console.log(index),
                  (
                    <TableRow
                      key={index}
                      sx={{
                        borderTop: 0,
                        borderRight: 0,
                        borderBottom: 0,
                        borderColor: "#40BEEA",
                        borderLeftWidth: "12px",
                        borderBottomWidth: "30px",
                        borderBottomColor: "#F2F0F4",
                        borderStyle: "solid",
                      }}
                    >
                      {/* <TableCell>
                    <b>{curElem.name}</b>
                  </TableCell>
                  <TableCell>{curElem.description}</TableCell>
                  <TableCell>{curElem.value}</TableCell>
                  <TableCell>{curElem.currency}</TableCell>
                  <TableCell>{curElem.date}</TableCell> */}
                      <TableCell style={{ marginLeft: 1000 }}>
                        <b>Fidelity Personal Investing accounts</b> <br></br>
                        <h2 style={({ font: "10" }, { color: "#146BAB" })}>
                          {" "}
                          {curElem.name}{" "}
                        </h2>
                        AN123456789
                      </TableCell>

                      <TableCell>
                        <b style={{ fontSize: 20 }}>{curElem.value}</b>
                        <br></br>
                        Investments + total cash & coins
                      </TableCell>

                      <TableCell>
                        <b style={{ fontSize: 20 }}>{curElem.currency}</b>
                        <br></br>
                        Gain/loss
                      </TableCell>

                      <TableCell>
                        <h3
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Link
                            style={{ textDecoration: "none" }}
                            to={{ pathname: "dashboard/deal", state: index }}
                          >
                            <ArrowForwardIosIcon
                              fontSize="large"
                              color="primary"
                            />
                          </Link>{" "}
                        </h3>
                      </TableCell>

                      {/* <TableCell>
                    <button className="container bg-green-light">add</button>
                  </TableCell> */}
                    </TableRow>
                  )
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
export default Funds;
