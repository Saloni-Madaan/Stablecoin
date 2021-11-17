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
      <div style={{textAlign:"center"}}>
    <h3> Portfolio </h3>
</div>
    
            <Container className={classes.root}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Mutual Fund</TableCell>
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
                        <TableCell>{curElem.description}</TableCell>
                        <TableCell>USD</TableCell>
                        <TableCell>{curElem.amount}</TableCell>
                        <TableCell>{  Math.floor(parseInt(parseInt(curElem.amount) + parseInt(Math.random()*5)))}</TableCell>
                        {/* <TableCell>{curElem.date}</TableCell> */}
                        <TableCell>This is a description for fund {index+1}</TableCell>
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