import * as React from "react";
import Headers from "./headers";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Container } from "@material-ui/core";
import HeightIcon from "@mui/icons-material/Height";
import { makeStyles } from "@material-ui/core/styles";
import TableContainer from "@mui/material/TableContainer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import TableHead from "@mui/material/TableHead";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import Tooltip from "@mui/material/Tooltip";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import SellSharpIcon from "@mui/icons-material/SellSharp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MuiGrid from "@mui/material/Grid";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useLocation, Link } from "react-router-dom";
import data from "./data";
const Web3 = require("web3");
const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const tokenAddress = "0xA6363f2718E5Aae3fDB057d93106C5EC7B57FcFe";
let userWalletAddress;
const web3 = new Web3(window.web3.currentProvider);
const contractInstance = new web3.eth.Contract(abi, tokenAddress);

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));
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
}));
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

export default function Deal() {
  const location = useLocation();
  const indexOfFund = location.state;
  const classes = useStyles();
  let [balance, setbalance] = React.useState(0);

  React.useEffect(async () => {
    if (window.ethereum) {
      await window.ethereum.send("eth_requestAccounts");
      userWalletAddress = window.ethereum.selectedAddress;
      userBalance();
      return true;
    }
    return false;
  }, []);

  window.addEventListener("load", async () => {
    if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
    } else {
      console.log("No Metamask (or other Web3 Provider) installed");
    }
  });

  //*--------------------------------------------------------------------------------------------*
  const userBalance = async () => {
    const balanceWie = await contractInstance.methods
      .balanceOf(userWalletAddress)
      .call();
    balance = web3.utils.fromWei(balanceWie, "ether");
    console.log("balance USDT: ", balance);
    setbalance(balance);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const funbun = (insert, index) => {
    console.log("Index ", index, " iof", indexOfFund);

    return (
      <>
        <Button
          id="demo-customized-button"
          aria-controls="demo-customized-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {insert}
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <Link
            style={{ textDecoration: "none" }}
            to={`/dashboard/cart/id/${index}/${indexOfFund}`}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <MonetizationOnIcon />
              Buy
            </MenuItem>
          </Link>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            <SellSharpIcon />
            Sell
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            <SwapHorizIcon />
            Switch
          </MenuItem>
        </StyledMenu>
      </>
    );
  };

  let rows = data[indexOfFund]["stocks"]; // location.state = index data from funds.js

  return (
    <>
      <Headers />

      <Container className={classes.root}>
        <Link
          style={{ textDecoration: "none" }}
          to={{ pathname: "/dashboard" }}
        >
          <Typography variant="body2" gutterBottom>
            <u>
              <KeyboardBackspaceSharpIcon fontSize="small" />
              Back to Summary
            </u>
          </Typography>
        </Link>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  colSpan={3}
                  style={{ borderBottom: "none" }}
                >
                  <Typography variant="h4" gutterBottom component="div">
                    Investments
                  </Typography>
                </TableCell>
                <TableCell align="right" style={{ borderBottom: "none" }}>
                  <Tooltip title="Custom View">
                    <Typography variant="h7" gutterBottom component="div">
                      Custom View{" "}
                      <SettingsIcon fontSize="small" color="primary" />
                    </Typography>
                  </Tooltip>
                </TableCell>
                <TableCell align="right" style={{ borderBottom: "none" }}>
                  <Tooltip title="Custom View">
                    <Typography variant="h7" gutterBottom component="div">
                      Custom View{" "}
                      <SettingsIcon fontSize="small" color="primary" />
                    </Typography>
                  </Tooltip>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Name <ArrowUpwardIcon fontSize="small" />
                </TableCell>
                <TableCell align="right">
                  Latest Price{" "}
                  <InfoOutlinedIcon fontSize="small" color="primary" />
                  <HeightIcon fontSize="small" color="secondary" />
                </TableCell>
                <TableCell align="right">
                  Quantity <InfoOutlinedIcon fontSize="small" color="primary" />
                  <HeightIcon fontSize="small" color="secondary" />
                </TableCell>
                <TableCell align="right">
                  Value <InfoOutlinedIcon fontSize="small" color="primary" />
                  <HeightIcon fontSize="small" color="secondary" />
                </TableCell>

                <TableCell align="right">
                  Gain/Loss{" "}
                  <InfoOutlinedIcon fontSize="small" color="primary" />
                  <HeightIcon fontSize="small" color="secondary" />
                </TableCell>
                <TableCell align="right">{"    "}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody justify="center" className={classes.td}>
              {rows.map(
                (row, index) => (
                  console.log("Index ", index, " iof", indexOfFund),
                  (
                    <TableRow key={row.name}>
                      <TableCell>
                        <Typography style={{ color: "#0000ff" }} variant="h10">
                          {row.name}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">{row.label} p</TableCell>
                      <TableCell align="right">
                        {ccyFormat(row.price)}
                      </TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                      <TableCell align="right">
                        {row.gl[0]}
                        <br />
                        <Typography style={{ color: "#ff0000" }} variant="h10">
                          {row.gl[1]}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ paddingLeft: 8 }} align="left">
                        {/* {funbun("Deal", index)} */}
                        <Button
                          id="demo-customized-button"
                          aria-controls="demo-customized-menu"
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          variant="contained"
                          disableElevation
                          onClick={handleClick}
                          endIcon={<KeyboardArrowDownIcon />}
                        >
                          Manage
                        </Button>
                        <StyledMenu
                          id="demo-customized-menu"
                          MenuListProps={{
                            "aria-labelledby": "demo-customized-button",
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >
                          <Link
                            style={{ textDecoration: "none" }}
                            to={`/dashboard/checkout/id/${index}/${indexOfFund}`}
                          >
                            <MenuItem onClick={handleClose} disableRipple>
                              <MonetizationOnIcon />
                              Buy
                            </MenuItem>
                          </Link>
                          <Divider sx={{ my: 0.5 }} />
                          <MenuItem onClick={handleClose} disableRipple>
                            <SellSharpIcon />
                            Sell
                          </MenuItem>
                          <Divider sx={{ my: 0.5 }} />
                          <MenuItem onClick={handleClose} disableRipple>
                            <SwapHorizIcon />
                            Switch
                          </MenuItem>
                        </StyledMenu>
                      </TableCell>
                    </TableRow>
                  )
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      {/* *........................................................* */}
      {/* This is the second table */}
      <Container className={classes.root}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={3} sx={{ padding: 3 }}>
                  <Typography variant="h4" gutterBottom component="div">
                    Cash & Coins
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody justify="center" className={classes.td}>
              <TableRow key={"row.name"}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ borderBottom: "none" }}
                >
                  Total Cash
                </TableCell>
                <TableCell align="right" style={{ borderBottom: "none" }}>
                  1421.83
                </TableCell>
                <TableCell align="center" style={{ borderBottom: "none" }}>
                  {/* {funbun("Manage")} */}
                </TableCell>
              </TableRow>
              <TableRow key={"row.name"}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ borderBottom: "none" }}
                ></TableCell>
                <TableCell
                  align="right"
                  style={{ borderBottom: "none" }}
                ></TableCell>
              </TableRow>
              <TableRow key={"row.name"}>
                <TableCell component="th" scope="row">
                  Total Coins
                </TableCell>
                <TableCell align="right">{balance}</TableCell>
                {/* <TableCell align="center">{funbun("Manage")}</TableCell> */}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <>
        <Grid container sx={{ padding: 10 }} variant="contained">
          <Grid item xs textAlign="right">
            Investments <b>$10,305.71</b>
            <br />
            Total Cash: <b>1400</b>
            <br />
            Total Coins: <b>{balance}</b>
          </Grid>
          <Divider orientation="vertical" flexItem>
            {"    "}
          </Divider>
          <Grid item xs>
            Total
            <br />
            <Typography variant="h6" component="h2">
              <b>$11,727.54</b>
            </Typography>
          </Grid>
        </Grid>
      </>
    </>
  );
}
