import React from "react";
import Header1 from "./sasta_header";
import "./checkout.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router";
//import LoadingButton from '@material-ui/lab/LoadingButton';
import data from "./data";
import { Home, ArrowDropUp, Info } from "@material-ui/icons";
import img1 from "./images/Capture2.jpg";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AppBar from "@mui/material/AppBar";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import PropTypes from 'prop-types';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import MuiGrid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useLocation, Link } from "react-router-dom";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
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
import { borderColor, color, style } from "@mui/system";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
{
  /* <img src="https://i.ibb.co/kDH7ZdB/isa.png" alt="isa" border="0"></img> */
}
//*--------------------------------------------------------------------------------------------*
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const Grid3 = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  justifyContent: "left",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 0),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}
    
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" sx={{color:"red" }}{...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="black">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};
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
  let rows = data[m];
  let row = rows["stocks"][id];

  //*--------------------------------------------------------------------------------------------*
  const [open, setOpen1] =useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  let [openLoder, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [progress, setProgress] = useState(0);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let [balance, setbalance] = useState(0);
  let [quantity, setquantity] = useState(1);
  let [paymentStatus, setPaymentStatus] = useState(false);
  let [paymentText, setPaymentText] = useState("Wallet Not Found !!");
  let [showEtherScan, setShowEtherScan] = useState(false);
  const [disable, setDisable] = useState(false);
  let wallet = true;

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
        description: row.description,
        name: row.name,
        amount: row.price,
        quantity: quantity,
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
          setProgress(0);
          axios
            .get(`/api/v1/invoice/${invoiceId}`)
            .then((response) => {
              const invoiceData = response.data;
              console.log("Step 2  invoiceData : ", invoiceData);
              return invoiceData;
            })
            .then((invoiceData) => {
              console.log("Step 3: ");
              setProgress(0);
              walletId = invoiceData.wallet.address;
              amount = row.price * quantity;
              const tx = {
                from: userWalletAddress,
                to: contractInstance._address,
                data: contractInstance.methods
                  .transfer(walletId, web3.utils.toWei(amount.toString()))
                  .encodeABI(),
              };
              setProgress(0);
              web3.eth
                .sendTransaction(tx)
                .then(async (res) => {
                  setProgress(20);
                  await res;
                  blockHash = res.transactionHash;
                  console.log(
                    "Step 4 : response of transaction form metamask : ",
                    res
                  );
                  return res;
                })
                .then(() => {
                  setProgress(50);
                  let transactionData = {
                    invoiceId: invoiceId,
                    userId: localStorage.getItem("_id"),
                    blockHash: blockHash,
                    userWalletAddress: userWalletAddress,
                  };
                  console.log("USer id : ", localStorage.getItem("_id"));
                  setProgress(70);
                  axios
                    .post("http://localhost:5001/transaction", transactionData)
                    .then((response) => {
                      setProgress(80);
                      console.log(
                        "Step 5: check if payment successfull : ",
                        response.data
                      );
                      setProgress(100);
                      setPaymentText("Payment Successfull");
                      setOpen(false);
                      setShowEtherScan(true);
                      handleClickOpen1();
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
                  setOpen(false);
                  setDisable(false);
                  return;
                });
            })
            .catch((error) => {
              console.log("Error decentrapay invoice : ", error);
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
      <Header1 />
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
        {/* <Link
          style={{ textDecoration: "none" }}
          to={{ pathname: "/dashboard" }}
        >
          <Typography variant="body2" gutterBottom>
            <u>
              <KeyboardBackspaceSharpIcon fontSize="small" />
              Back to Summary
            </u>
          </Typography>
        </Link> */}
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
          {/* <Grid2 container>
            <Grid2 item xs>
          <Link
          style={{ textDecoration: "none",alignItems:"left",alignText:"left",
          //paddingRight:"1160px" 
        }}
          to={{ pathname: "/dashboard" }}
        >
          <Typography variant="body2" gutterBottom>
            <u>
              <KeyboardBackspaceSharpIcon fontSize="small" />
              Back to Summary
            </u>
          </Typography>
        </Link>
        </Grid2>
        <Grid2 item xs sx={{paddingLeft:"940px"}}>
        <Link
          style={{ textDecoration: "none",alignItems:"left",alignText:"left",
          //paddingLeft:"1160px" 
        }}
          to={{ pathname: "/dashboard/transactions" }}
        >
          <Typography variant="body2" gutterBottom>
            <u>
              
              See All Transactions<ArrowRightAltSharpIcon fontSize="small" />
            </u>
          </Typography>
        </Link>
        </Grid2>
        </Grid2> */}
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
                 <b style={{ fontSize: 16,color:'rgb(247, 207, 5)' }}>₮</b>{Intl.NumberFormat('en-US').format(Math.round(balance))}
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
                          Amount ($)
                        </Typography>
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
                        { borderColor: "rgb((255,255,255))" },
                        { color: "#FFFFFF" },
                        { backgroundColor: "#414956" })
                      }
                        
                      >
                        
                       <Typography color="white">   Amount (<b style={{ fontSize: 18,color:'rgb(247, 207, 5)' }}>₮</b>)</Typography>
                    
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
                              {row.name} <br></br>
                              <TableCell component="th" scope="row"></TableCell>
                            </b>
                          </TableCell>
                          <TableCell>
                            {" "}
                            <b style={{ fontSize: 20,color:'rgb(247, 207, 5)' }}>₮</b><b style={{ fontSize: 20}}>{row.price}</b>
                          </TableCell>
                          <TableCell>
                            <TextField
                              onChange={(e) => {
                                setquantity(parseInt(e.target.value));
                                console.log(typeof quantity);
                              }}
                              id="quant"
                              label="0.00"
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
                                {console.log("quantity is",quantity)}
                                <b style={{ fontSize: 20,color:'#D2981D' }}>₮</b> {row.price*quantity}{" "}
                              </Typography>{" "}
                            </TableCell>
                            <TableCell style={{ backgroundColor: "#B6CBE1" }}>
                              <Button
                                onClick={() => {
                                  setDisable(true);
                                  initPayButton();
                                }}
                                // loading={openLoder}
                                // loadingPosition="end"
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
                  <Toolbar>
                    {showEtherScan ? (
                      // <a
                      //   href={`https://rinkeby.etherscan.io/tx/${blockHash}`}
                      //   target="_blank"
                      // >
                      //   Click here to check out your transaction on EtherScan
                      // </a>
                      
                      <div>
                        
                        <BootstrapDialog
        onClose={handleClose1}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose1} textAlign="center">
          Transaction Confirmed
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <CheckCircleOutlinedIcon color="primary" sx={{ fontSize: 70 ,paddingLeft:28}}/>
          <Typography gutterBottom>
            Your Payment has been recieved and your portfolio has been updated. 
            </Typography>
          
          
          <a
                       href={`https://rinkeby.etherscan.io/tx/${blockHash}`}
                        target="_blank"
                      >
                        <Typography gutterBottom justifyContent="center" sx={{paddingTop:2,paddingLeft:9}}>
                        Click here to see your transaction on EtherScan
                        </Typography>
                      </a>
                      
        </DialogContent>
        <DialogActions>
        <Grid3 container>
            <Grid3 item xs>
            <Link 
            style={{ textDecoration: "none" }}
          to={{ pathname: "/dashboard" }}>
          <Button autoFocus startIcon={< HomeRoundedIcon fontSize="small" />}>
            Back to Home
          </Button>
          </Link>
          </Grid3>
          <Grid3 item xs sx={{paddingLeft:27 }}>
            <Link 
            style={{ textDecoration: "none" }}
          to={{ pathname: "/dashboard/portfolio" }}>
          <Button autoFocus target="_blank" href="http://www.google.com/"  endIcon={< AccountBoxRoundedIcon />}>
            portfolio
          </Button>
          </Link>
          </Grid3>
          </Grid3>
        </DialogActions>
      </BootstrapDialog>
                        </div>
                    ) : (
                      <></>
                    )}
                  </Toolbar>
                </React.Fragment>
              </Container>
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

{/*This is the Gear Animation
 <div class="load">
  <div class="gear one">
    <svg id="blue" viewbox="0 0 100 100" fill="#94DDFF">
      <path d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6      c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3      l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9      c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"></path>
    </svg>
  </div>
  <div class="gear two">
    <svg id="pink" viewbox="0 0 100 100" fill="#FB8BB9">
      <path d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6      c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3      l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9      c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"></path>
    </svg>
  </div>
  <div class="gear three">
    <svg id="yellow" viewbox="0 0 100 100" fill="#FFCD5C">
      <path d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6      c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3      l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9      c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"></path>
    </svg>
  </div>
  <div class="lil-circle"></div>
  <svg class="blur-circle">
    <filter id="blur">
      <fegaussianblur in="SourceGraphic" stddeviation="13"></fegaussianblur>
    </filter>
    <circle cx="70" cy="70" r="66" fill="transparent" stroke="white" stroke-width="40" filter="url(#blur)"></circle>
  </svg>
</div>
<Box
        sx={{
          top: 0,
          left: 0,
          bottom: 170,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" component="div" color="white">
          Transacting
        </Typography>
      </Box> */}

            {/* This is the loading pen animation */}
            <div className='container'>
            
  <div className='loader'>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <div className='loader--dot'></div>
    <Box
        sx={{
          top: 35,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="white">
          Please wait for 30 seconds
        </Typography>
      </Box>
    <div className='loader--text'></div>
  </div>
  
</div>
            {/* <img src="https://i.ibb.co/pZ8sq1w/image-processing20210902-12079-r8o8k9.gif" alt="image-processing20210902-12079-r8o8k9" border="0"></img> */}
            {/* <CircularProgressWithLabel value={progress} /> */}
            {/* <CircularProgress  />
            <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="black">
          {`${Math.round(progress)}%`}
        </Typography>
      </Box> */}
          </Backdrop>
        </div>
      ) : (
        <></>
      )}
    </ThemeProvider>
    // </body>
  );
}
