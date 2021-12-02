import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import Link from "@mui/material/Link";
import { makeStyles } from "@material-ui/core";
import { Home, ArrowDownwardSharp } from "@material-ui/icons";
import { Button } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
const Grid5 = styled(MuiGrid)(({ theme }) => ({
  width: "20%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 0),
  },
}));
const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "60%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 0),
  },
}));
const Grid1 = styled(MuiGrid)(({ theme }) => ({
  width: "50%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 0),
  },
}));
function funicon(){
  return (
    <Typography variant="h5" color="rgb(247, 207, 5)">₮</Typography>
  )
}
const Web3 = require("web3");
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
    color: "#FFFFFF",
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

//*--------------------------------------------------------------------------------------------*

const tokenAddress = "0xA6363f2718E5Aae3fDB057d93106C5EC7B57FcFe";
let userWalletAddress;
const web3 = new Web3(window.web3.currentProvider);
const contractInstance = new web3.eth.Contract(abi, tokenAddress);

const sections = [
  //{ title: "Profile", url: "/dashboard/portfolio" },
  { title: "Profile", url: "/dashboard/portfolio" },
  { title: "Watchlist", url: "" },
  { title: "Documents & Messages", url: "" },
  { title: "Transaction History & Reports", url: "/dashboard/transactions" },
  { title: "Manage Investments", url: "" },
  { title: "Home", url: "/dashboard" },
];
const Header1 = () => {
  let date = new Date().toLocaleString().split(",")[0];
  let time = new Date().toLocaleString().split(", ")[1];
  let [balance, setbalance] = useState(0);

  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  React.useEffect(async () => {
    if (window.ethereum) {
      const resultMetamsk = await window.ethereum.send("eth_requestAccounts");
      userWalletAddress = resultMetamsk.result[0];
      userBalance();
      return true;
    }
    return false;
  }, []);
  const userBalance = async () => {
    const balanceWie = await contractInstance.methods
      .balanceOf(userWalletAddress)
      .call();
    balance = web3.utils.fromWei(balanceWie, "ether");
    console.log("balance USDT: ", balance);
    setbalance(balance);
  };
  return (
    <React.Fragment>
      <Toolbar
        className={classes.toolbar}
        component="nav"
        variant="dense"
        sx={{
          overflowX: "auto",
        }}
      >
        <Typography
          variant="h8"
          className={classes.logoLg}
          className={classes.ArrowDownwardSharp}
          style={{ color: "#FFFFFF" }}
        >
          Personal investing <ArrowDownwardSharp />
        </Typography>
        <Typography variant="h8" className={classes.logoSm}>
          FIL
        </Typography>

        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              bgcolor: "#414956",
              color: "text.secondary",
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
              href="https://www.fidelity.com/customer-service/phone-numbers/international"
              style={
                ({ borderWidth: 1 },
                { borderColor: "rgb((255,255,255))" },
                { color: "#FFFFFF" })
              }
            >
              Help&Support
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button
              color="inherit"
              className={(classes.Help, classes.butto)}
              style={
                ({ borderWidth: 1 },
                { borderColor: "rgb((255,255,255))" },
                { color: "#FFFFFF" })
              }
            >
              What's new?
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button
              color="inherit"
              href="https://www.fidelityinternational.com/"
              className={classes.Home}
              style={
                ({ borderWidth: 1 },
                { borderColor: "rgb((255,255,255))" },
                { color: "#FFFFFF" })
              }
            >
              Back to Fidelity <Home />
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button
              color="primary"
              style={
                ({ borderWidth: 1 },
                { borderColor: "#0000FF" },
                { color: "#FFFFFF" })
              }
              href="/"
            >
              Logout
            </Button>
          </Box>
        </div>
      </Toolbar>

      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "text-gray-900",
          flexDirection: "row-reverse",
          overflowX: "auto",
        }}
      >
        {sections.map((section) => (
          <Link
            style={{ textDecoration: "none" }}
            color="inherit"
            noWrap
            key={section.title}
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title} <KeyboardArrowDownTwoToneIcon fontSize="small" />
          </Link>
        ))}
        <Link></Link>
        <img
          src="https://findlogovector.com/wp-content/uploads/2019/11/fidelity-international-logo-vector.png"
          width="100"
          height="50"
          style={{ marginRight: "auto" }}
        ></img>
      </Toolbar>

      {/* <Toolbar
        className={classes.toolbar}
        component="nav"
        variant="dense"
        sx={{
          overflowX: "auto",
        }}
      >
       
      </Toolbar> */}
    </React.Fragment>
  );
};

// SASTAHeader.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Header1;
