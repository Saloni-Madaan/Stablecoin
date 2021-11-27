import Portfolios from "./portfolioApi";
import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
} from "@material-ui/core";
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

const Portfolio = () => {
  const classes = useStyles();
  const [portfolioData, setPortfolioData] = useState(Portfolios);
  const userId = localStorage.getItem("_id");

  useEffect(() => {
    axios
      .post("http://localhost:5001/getportfolioData", { userId })
      .then((res) => {
        const data = res.data.data;
        console.log("Data recived", data);
        setPortfolioData(data);
      });
  }, []);

  return (
    <div className="Portfolio">
      <Headers />
      <div style={{ textAlign: "center" }}>
        <h3> Portfolio </h3>
      </div>
      <Container className={classes.root}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Mutual Fund</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Currency</TableCell>
                <TableCell>Current Investment</TableCell>
                <TableCell>Return</TableCell>
                {/* <TableCell>Date</TableCell> */}
                <TableCell>Descripton</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {portfolioData.map((curElem, index) => (
                <TableRow>
                  <TableCell>{curElem.name}</TableCell>
                  <TableCell>{curElem.quantity}</TableCell>
                  <TableCell>USDT</TableCell>
                  <TableCell>{curElem.amount}</TableCell>
                  <TableCell>
                    {Math.floor(
                      parseInt(
                        parseInt(curElem.amount) +
                          parseFloat(Math.random() * 100)
                      )
                    )}
                  </TableCell>
                  <TableCell>{curElem.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      );
    </div>
  );
};
export default Portfolio;
