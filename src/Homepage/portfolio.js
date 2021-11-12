import Portfolios from "./portfolioApi";
import React, { useEffect, useState } from "react";
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
import { makeStyles } from "@material-ui/core/styles";
import { TableRow } from "@mui/material";
import Headers from "./headers";

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
  return (
    <div className="Portfolio">
      <Headers />
      <h1>Portfolio</h1>
      {portfolioData.map((curElem) => {
        console.log(curElem);
        return (
          <>
            <Container className={classes.root}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Mutual Fund</TableCell>
                      <TableCell>Currency</TableCell>
                      <TableCell>Current Investment</TableCell>
                      <TableCell>Return</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Descripton</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {portfolioData.map((curElem) => (
                      <TableRow>
                        <TableCell>{curElem.name}</TableCell>
                        <TableCell>{curElem.currency}</TableCell>
                        <TableCell>{curElem.value}</TableCell>
                        <TableCell>{curElem.return}</TableCell>
                        <TableCell>{curElem.date}</TableCell>
                        <TableCell>{curElem.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </>

          //  <div className="portfolio" key={curElem.id}>
          //           <span className="tportfolio-id">{curElem.id}</span><br/>
          //           <span className="portfolio-name">{curElem.name}</span><br/><br/>

          //       </div>
        );
      })}
    </div>
  );
};
export default Portfolio;
