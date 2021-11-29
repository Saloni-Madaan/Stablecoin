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
import ReactApexChart from "react-apexcharts";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
  const [portfolioData, setPortfolioData] = useState(null);
  const userId = localStorage.getItem("_id");
  let fundNames, fundAmounts;

  useEffect(() => {
    axios
      .post("http://localhost:5001/getportfolioData", { userId })
      .then((res) => {
        const data = res.data.data;
        console.log("Data recived", data);
        setPortfolioData(data);
      });
  }, []);
  if (portfolioData) {
    fundNames = portfolioData.map((item) => {
      return item.name;
    });
    fundAmounts = portfolioData.map((item) => item.amount);
  }

  return (
    <div className="Portfolio">
      <Headers />
      <div style={{ textAlign: "center" }}>
        <h3> Portfolio </h3>
      </div>
      {portfolioData ? (
        <Box sx={{ flexGrow: 1 }}>
          <Container className={classes.root}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <RenderPortolioPie
                  fundAmount={fundAmounts}
                  fundName={fundNames}
                >
                  xs=5
                </RenderPortolioPie>
              </Grid>
              <Grid item xs={6}>
                <RenderPortfolio />
              </Grid>
            </Grid>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Index</TableCell>
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
                      <TableCell>{index + 1}</TableCell>
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
        </Box>
      ) : (
        <>No data please buy something</>
      )}
      );
    </div>
  );
};

const RenderPortfolio = () => {
  const a = {
    series: [
      {
        name: "USDT",
        data: [112, 67, 80, 98, 56, 45, 78, 89, 100],
      },
      {
        name: "US Dollor",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "USDT Vs US$",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={a.options}
        series={a.series}
        type="line"
        height={350}
      />
    </div>
  );
};

const RenderPortolioPie = (pdata) => {
  console.log("pie called", pdata);
  const options = {
    labels: pdata.fundName,
    chart: {
      width: "100px",
      height: "100px",
    },

    series: pdata.fundAmount,
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={options.series}
        labels={options.labels}
        type="donut"
      />
    </div>
  );
};

export default Portfolio;
