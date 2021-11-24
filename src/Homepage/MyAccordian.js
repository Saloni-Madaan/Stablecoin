import React, { useState } from "react";
import { Container, Paper, Typography } from "@material-ui/core";
import { TableContainer, Table, TableCell } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "150vw",

    // backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(3),
  },
}));
const MyAccordian = ({ name, description, value, currency }) => {
  const [show, setShow] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.root}>
        <TableContainer component={Paper}>
          <Table
          // style={{ border: "0.5px solid black " }}
          >
            <div>
              <TableCell style={{ marginLeft: 1000 }}>
                <b>Fidlity Personal Investing accounts</b> <br></br>
                <h2 style={({ font: "10" }, { color: "#006193" })}> {name} </h2>
                AN123456789
              </TableCell>
              <TableCell>
                {value}
                <br></br>
                Investments + total cash & coins
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <h3
                  onClick={() => setShow(!show)}
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  {" "}
                  +{" "}
                </h3>
              </TableCell>
            </div>
            {show && (
              <div>
                <Typography>
                  <p>{description}</p>
                  <p>{value}</p>
                  <p>{currency}</p>
                  <button className="container bg-green-light">add</button>
                </Typography>
              </div>
            )}
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default MyAccordian;
