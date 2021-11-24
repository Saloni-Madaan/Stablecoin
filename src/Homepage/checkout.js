import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "./data";
import { Home, ArrowDropUp, Info } from "@material-ui/icons";
import img1 from "./images/Capture2.jpg";
import AppBar from "@mui/material/AppBar";
import MuiGrid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import SellSharpIcon from "@mui/icons-material/SellSharp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MenuIcon from "@mui/icons-material/Menu";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CardContent from "@mui/material/CardContent";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";

import {
  makeStyles,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";

import { Button, Container } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Image from "material-ui-image";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { borderColor, color } from "@mui/system";
{
  /* <img src="https://i.ibb.co/kDH7ZdB/isa.png" alt="isa" border="0"></img> */
}
//*--------------------------------------------------------------------------------------------*

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
let userWalletAddress, walletId;
let blockHash;
const web3 = new Web3(window.web3.currentProvider);
const contractInstance = new web3.eth.Contract(abi, tokenAddress);
let amount;
const apiKey = "IG353536346StblC345";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#414956",
  },
  logoLg: {
    display: "none",
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  Help: {
    display: "flex",
    alignItems: "center",
  },

  ArrowDownwardSharp: {
    display: "flex",
    alignItems: "center",
  },

  butto: {
    borderWidth: 3,
    borderColor: "#000450",
    // color : "#FFFFFF"
  },

  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  links: {
    contrastText: "white",
    // marginCenter: theme.spacing(10),
    alignItems: "center",
  },
}));
const Grid1 = styled(MuiGrid)(({ theme }) => ({
  width: "80%",
  justifyContent: "left",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 0),
  },
}));
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 30,
  borderRadius: 5,
  // [`&.${linearProgressClasses.colorPrimary}`]: {
  //   backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  // },
  // [`& .${linearProgressClasses.bar}`]: {
  //   borderRadius: 5,
  //   backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  // },
}));
//*--------------------------------------------------------------------------------------------*

export default function Checkout() {
  const { id, m } = useParams();
  console.log("uid", id, m);
  //*--------------------------------------------------------------------------------------------*
  let [openLoder, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let [balance, setbalance] = useState(0);
  let [paymentStatus, setPaymentStatus] = useState(false);
  let [paymentText, setPaymentText] = useState("Wallet Not Found !!");
  let [showEtherScan, setShowEtherScan] = useState(false);
  const [disable, setDisable] = useState(false);
  let wallet = true;
  let rows = data[m];
  let row = rows["stocks"][id];
  let date = new Date().toLocaleString().split(",")[0];
  let time = new Date().toLocaleString().split(", ")[1];
  const classes = useStyles();
  const theme = createTheme();
  //*--------------------------------------------------------------------------------------------*

  useEffect(async () => {
    if (window.ethereum) {
      const resultMetamsk = await window.ethereum.send("eth_requestAccounts");
      userWalletAddress = resultMetamsk.result[0];
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
  //*--------------------------------------------------------------------------------------------*

  let itemsInCart = {
    apiKey: apiKey,
    currency: "USDT",
    items: [
      {
        description: "desc of fund 1",
        name: "Fund1",
        amount: 1,
      },
      {
        description: "desc of fund 2",
        name: "Fund2",
        amount: 1,
      },
    ],
  };
  //*--------------------------------------------------------------------------------------------*

  const initPayButton = async () => {
    let invoiceId;
    if (wallet) {
      setDisable(true);
      axios
        .post("/api/v1/invoice", itemsInCart)
        .then((response) => {
          invoiceId = response.data.invoiceId;
          console.log("Step 1: invoice id : ", invoiceId);
          setPaymentStatus(true);
          setPaymentText("Payment Pending to be confirmed");
          setOpen(true);
          return invoiceId;
        })
        .then((invoiceId) => {
          axios
            .get(`/api/v1/invoice/${invoiceId}`)
            .then((response) => {
              const invoiceData = response.data;
              console.log("Step 2  invoiceData : ", invoiceData);
              return invoiceData;
            })
            .then((invoiceData) => {
              console.log("Step 3: ");
              walletId = invoiceData.wallet.address;
              amount = row.price;
              const tx = {
                from: userWalletAddress,
                to: contractInstance._address,
                data: contractInstance.methods
                  .transfer(walletId, web3.utils.toWei(amount.toString()))
                  .encodeABI(),
              };

              web3.eth
                .sendTransaction(tx)
                .then(async (res) => {
                  await res;
                  blockHash = res.transactionHash;
                  console.log(
                    "Step 4 : response of transaction form metamask : ",
                    res
                  );
                  return res;
                })
                .then(() => {
                  let transactionData = {
                    invoiceId: invoiceId,
                    userId: localStorage.getItem("_id"),
                    blockHash: blockHash,
                    userWalletAddress: userWalletAddress,
                  };
                  console.log("USer id : ", localStorage.getItem("_id"));
                  axios
                    .post("http://localhost:5001/transaction", transactionData)
                    .then((response) => {
                      console.log(
                        "Step 5: check if payment successfull : ",
                        response.data
                      );
                      setPaymentText("Payment Successfull");
                      setOpen(false);
                      setShowEtherScan(true);
                      setDisable(false);
                    })
                    .catch((error) => {
                      setPaymentText("Payment Failed");
                      console.log("Step 5: Some error occur : ", error);
                      setDisable(false);
                    });
                })
                .catch((err) => {
                  setPaymentText("Payment Failed");
                  console.log("Step 4 : error from metamask : ", err);
                  setDisable(false);
                  return;
                });
            });
        })
        .catch((e) => {
          setDisable(false);
          console.log("error : ", e);
        });
    }
  };
  //*--------------------------------------------------------------------------------------------*

  const paymentStatusText = (param) => {
    switch (param) {
      case "Payment Successfull":
        return <>Payment Successfull !! hurray</>;

      case "Payment Failed":
        return <>Payment Failed !!</>;
      default:
        return <>Payment Pending to be confirmed</>;
    }
  };
  //*--------------------------------------------------------------------------------------------*

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh" }}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1611185876407-2471258a3f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3569&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            //paddingTop:"4px",
            my: 10,
            mx: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <div>
            <Box
              sx={{
                //flexGrow: 1,
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                border: (theme) => `0px solid ${theme.palette.divider}`,
                borderRadius: 1,
                color: "text.secondary",
                "& svg": {
                  m: 1.5,
                },
                "& hr": {
                  mx: 0.5,
                },
              }}
            >
              <Typography variant="h4" color="black">
                Buy, Sell, Switch
              </Typography>
              {/* <Typography variant="h6" color="inherit" color="white">
            Buy, Sell, this
          </Typography> */}
              <Typography
                variant="caption"
                color="black"
                alignText="right"
                sx={{ paddingLeft: 80 }}
              >
                Prices and Valuations updated at {time} GMT on {date}{" "}
                <InfoOutlinedIcon fontSize="small" sx={{ color: "#7EC8E3" }} />
              </Typography>
            </Box>
          </div>

          <AppBar position="static">
            <Toolbar
              variant="dense"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#F7F7F7",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "white",
                  padding: 2,
                  borderColor: "white",
                }}
                variant="contained"
              >
                <Typography variant="h7" color="black">
                  <b>Investment Isa</b>
                  <br />
                  <Typography variant="caption" color="black">
                    {"LITX001295   $11,499"}
                  </Typography>
                </Typography>
                <Divider orientation="vertical" flexItem />
                <KeyboardArrowDownSharpIcon sx={{ color: "black" }} />
              </Button>
              <Divider orientation="vertical" flexItem />
              <Typography
                variant="body2"
                gutterBottom
                color="black"
                textAlign="left"
              >
                Cash available to invest{" "}
                <InfoOutlinedIcon fontSize="small" sx={{ color: "#7EC8E3" }} />{" "}
                <br />
                <Typography
                  variant="button"
                  gutterBottom
                  color="black"
                  textAlign="left"
                >
                  $984.33
                </Typography>
                <br />
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#036AAD" }}
                >
                  Add cash
                </Button>
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography
                variant="body2"
                gutterBottom
                color="black"
                textAlign="left"
              >
                Coins available to invest{" "}
                <InfoOutlinedIcon fontSize="small" sx={{ color: "#7EC8E3" }} />{" "}
                <br />
                <Typography
                  variant="button"
                  gutterBottom
                  color="black"
                  textAlign="left"
                >
                  T984.33
                </Typography>
                <br />
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#036AAD" }}
                >
                  Add coins
                </Button>
              </Typography>
              <Divider orientation="vertical" flexItem />
              <img
                src="https://i.ibb.co/kDH7ZdB/isa.png"
                alt="isa"
                width="400"
                height="120"
                //style={{ marginRight: "auto" }}
              ></img>
              {/* <Typography
              variant="body2"
              gutterBottom
              color="black"
              textAlign="left"
            >
              Your ISA Allowance
            </Typography> */}
              <BorderLinearProgress variant="determinate" value={20} />
            </Toolbar>
          </AppBar>
          <Typography
            sx={{ paddingTop: 7 }}
            variant="h5"
            gutterBottom
            color="black"
            textAlign="left"
          >
            What would you like to do today?
          </Typography>
          <br />
          <br />
          <br />

          {/* <Button variant='contained' style={{paddingTop:12,maxWidth: '280px', maxHeight: '180px', minWidth: '280px', minHeight: '180px'}}>BUY</Button> */}
          <Grid1 container>
            <Grid1 item xs>
              <Card
                style={{
                  backgroundColor: "#116394",
                  display: "block",
                  borderRadius: 1,
                  width: "14vw",
                  height: "8vw",
                }}
              >
                <CardContent
                  textAlign="center"
                  sx={{ paddingLeft: 13, paddingTop: 5 }}
                >
                  <MonetizationOnOutlinedIcon />
                  <br />
                  <Typography variant="h6" color="white" gutterBottom>
                    BUY
                  </Typography>
                </CardContent>
              </Card>
            </Grid1>
            <Grid1 item xs>
              <Card
                sx={{
                  border: 2,
                  backgroundColor: "#F7F7F7",
                  display: "block",
                  borderRadius: 1,
                  borderColor: "primary.main",
                  borderBottomWidth: 4,
                  borderTopWidth: 2,
                  width: "14vw",
                  height: "8vw",
                }}
              >
                <CardContent
                  textAlign="center"
                  sx={{
                    paddingLeft: 13,
                    paddingTop: 5,
                    marginRight: 16,
                    flexGrow: 1,
                  }}
                >
                  <SellSharpIcon />
                  <br />
                  <Typography
                    sx={{ flexGrow: 1 }}
                    variant="h6"
                    color="black"
                    gutterBottom
                  >
                    Sell
                  </Typography>
                </CardContent>
              </Card>
            </Grid1>
            <Grid1 item xs>
              <Card
                sx={{
                  border: 2,
                  backgroundColor: "#F7F7F7",
                  display: "block",
                  borderRadius: 1,
                  borderColor: "primary.main",
                  borderBottomWidth: 4,
                  borderTopWidth: 2,
                  width: "14vw",
                  height: "8vw",
                }}
              >
                <CardContent
                  textAlign="center"
                  sx={{
                    paddingLeft: 10,
                    paddingTop: 5,
                    marginRight: 12,
                    flexGrow: 1,
                  }}
                >
                  <SwapHorizIcon
                    sx={{ paddingLeft: 4, marginRight: 12, flexGrow: 1 }}
                  />
                  <br />
                  <Typography
                    sx={{ flexGrow: 1 }}
                    variant="h6"
                    color="black"
                    gutterBottom
                  >
                    SWITCH
                  </Typography>
                </CardContent>
              </Card>
            </Grid1>
          </Grid1>
          {/* The Space Ends Here */}
          <br />
          <br />
          <br />

          <AppBar position="static">
            <Toolbar
              variant="dense"
              sx={{
                border: 0,
                paddingLeft: 4,
                paddingRight: 4,
                display: "flex",
                //justifyContent: "space-between",
                //alignSelf: 'flex-end',
                backgroundColor: "white",
              }}
            >
              <img src={img1} alt="" width="300" height="400"></img>
              <Container>
                <React.Fragment>
                  <Toolbar component="nav">
                    <Typography
                      variant="h6"
                      className={classes.logoLg}
                      style={{ color: "black" }}
                    >
                      Investment name <ArrowDropUp />
                    </Typography>
                    <Typography
                      variant="h6"
                      className={classes.logoLg}
                      style={{ color: "black" }}
                    >
                      Latest buy price <Info />
                    </Typography>
                    <Typography style={{ color: "black" }}>
                      Invest By:
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "fit-content",
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        // borderRadius: 1,
                        // bgcolor: '#414956',
                        // color: 'text.secondary',
                        "& svg": {
                          m: 1.5,
                        },
                        "& hr": {
                          mx: 0.5,
                        },
                      }}
                    >
                      <Button
                        color="inherit"
                        href=""
                        style={
                          ({ borderWidth: 1 },
                          { borderColor: "rgb((255,255,255))" },
                          { color: "#FFFFFF" },
                          { backgroundColor: "#414956" })
                        }
                      >
                        Amount($)
                      </Button>

                      <Button
                        style={
                          ({ color: "black" }, { backgroundColor: "#FFFFFF" })
                        }
                      >
                        <Typography
                          variant="button"
                          display="block"
                          gutterBottom
                          color="black"
                        >
                          % of lump sum
                        </Typography>
                      </Button>

                      <Divider orientation="vertical" flexItem />
                      <Button
                        style={
                          ({ borderWidth: 1 },
                          { color: "#000000" },
                          { backgroundColor: "#FFFFFF" })
                        }
                      >
                        <Typography
                          variant="button"
                          display="block"
                          gutterBottom
                          color="black"
                        >
                          Amount (USDT)
                        </Typography>
                      </Button>
                    </Box>{" "}
                  </Toolbar>

                  <br></br>

                  <Toolbar component="nav">
                    <TableContainer component={Paper}>
                      <Table>
                        <TableRow style={{ backgroundColor: "#F7F7F7" }}>
                          <TableCell colSpan={5}> {rows.name}</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>
                            <b style={{ color: "#006193" }}>
                              {row.name} <br></br> Acc
                              <TableCell component="th" scope="row"></TableCell>
                            </b>
                          </TableCell>
                          <TableCell>
                            {" "}
                            <b style={{ fontSize: 20 }}> {row.price} USDT </b>
                          </TableCell>
                          <TableCell>
                            <TextField
                              id="outlined-basic"
                              label="$  0.00"
                              variant="outlined"
                              sx={{
                                "& > :not(style)": { m: 1, width: "15ch" },
                              }}
                            />

                            {/* <Divider orientation="vertical" flexItem /> */}
                          </TableCell>
                          <TableCell>
                            <Button style={{ backgroundColor: "#186AAD" }}>
                              <Typography color="white">Buy</Typography>
                            </Button>
                          </TableCell>
                          <TableCell style={{ fontSize: 20 }}>x</TableCell>
                        </TableRow>
                      </Table>{" "}
                    </TableContainer>
                  </Toolbar>

                  <Toolbar component="nav">
                    <Typography
                      variant="h6"
                      className={classes.logoLg}
                      style={{ color: "black" }}
                    ></Typography>

                    <Typography variant="h6" style={{ color: "black" }}>
                      Total
                    </Typography>

                    <div>
                      <TableContainer>
                        <Table>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell
                              style={{ backgroundColor: "#B6CBE1" }}
                            ></TableCell>
                            <TableCell
                              style={{ backgroundColor: "#B6CBE1" }}
                            ></TableCell>
                            <TableCell style={{ backgroundColor: "#B6CBE1" }}>
                              <Typography color="black">
                                {" "}
                                $ {row.price}{" "}
                              </Typography>{" "}
                            </TableCell>
                            <TableCell style={{ backgroundColor: "#B6CBE1" }}>
                              <Button
                                onClick={() => {
                                  setDisable(true);
                                  initPayButton();
                                }}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  width: "fit-content",
                                  border: (theme) =>
                                    `1px solid ${theme.palette.divider}`,

                                  bgcolor: "#F7741E",
                                  color: "white",
                                  "& svg": {
                                    m: 1.5,
                                  },
                                  "& hr": {
                                    mx: 0.5,
                                  },
                                }}
                              >
                                Buy
                              </Button>
                              {/* <div>
                                {paymentStatus ? (
                                  <>
                                    Payment Status :{" "}
                                    <h4> {paymentStatusText(paymentText)}</h4>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </div> */}
                            </TableCell>

                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </Table>
                      </TableContainer>
                    </div>
                  </Toolbar>

                  <br></br>
                </React.Fragment>
              </Container>
              {showEtherScan ? (
                <a
                  href={`https://rinkeby.etherscan.io/tx/${blockHash}`}
                  target="_blank"
                >
                  Click here to see transaction details
                </a>
              ) : (
                <></>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
      {openLoder ? (
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openLoder}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      ) : (
        <></>
      )}
    </ThemeProvider>
    // </body>
  );
}
