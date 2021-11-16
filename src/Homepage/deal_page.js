import * as React from "react";
import Headers from "./headers";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import Tooltip from "@mui/material/Tooltip";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SellSharpIcon from "@mui/icons-material/SellSharp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MuiGrid from "@mui/material/Grid";
import {useLocation,Link} from "react-router-dom";
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
let blockHash;
const web3 = new Web3(window.web3.currentProvider);
const contractInstance = new web3.eth.Contract(abi, tokenAddress);
const TAX_RATE = 0.07;
const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2)
  }
}));
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
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
      padding: "4px 0"
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}));
function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

export default function Deal(items) {
 
  let [balance, setbalance] = React.useState(0);
  let [paymentStatus, setPaymentStatus] = React.useState(false);
  let [paymentText, setPaymentText] = React.useState("Wallet Not Found !!");
  let [showEtherScan, setShowEtherScan] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  let wallet = true;

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
  const funbun = (insert,index) => {
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
            "aria-labelledby": "demo-customized-button"
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <Link style={{ textDecoration: 'none' }} to={{pathname: "/dashboard/cart",state:[index],}}>
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
            <SwitchLeftIcon />
            Switch
          </MenuItem>
        </StyledMenu>
      </>
    );
  };
  function createRow(name, label, price, quantity, gl) {
    return { name, label, price, quantity, gl, funbun };
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  const location = useLocation();
//console.log(data[location.state]);
  let rows=[];
  if(location.state==0){
     rows = [
      createRow(data[0][0]["name"], data[0][0]["latest"], data[0][0]["quantity"], "439/400", data[0][0]["gl"]),
      createRow(data[0][1]["name"], data[0][1]["latest"], data[0][1]["quantity"], "439/400", data[0][1]["gl"]),
    ];
  }
  else if(location.state==1){
     rows = [
      createRow(data[1][2]["name"], data[1][2]["latest"], data[1][2]["quantity"], "439/400", data[1][2]["gl"]),
      createRow(data[1][3]["name"], data[1][3]["latest"], data[1][3]["quantity"], "439/400", data[1][3]["gl"]),
    ];
  }

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;
  
  
  console.log(rows);
  return (
    <>
    <Headers />
   
      <TableContainer component={Paper} sx={{paddingTop: 10,paddingBottom: 4,paddingLeft:15 }} >
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
              <TableCell align="right"  style={{ borderBottom: "none" }}>
                <Tooltip title="Custom View">
                  <Typography variant="h7" gutterBottom component="div">
                    Custom View{" "}
                    <SettingsIcon fontSize="small" color="primary" />
                  </Typography>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Latest Price</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Gain/Loss</TableCell>
              <TableCell align="right">{"    "}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.label} p</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                <TableCell align="right">{row.gl}</TableCell>
                <TableCell sx={{paddingLeft:8}} align="left">{row.funbun("Deal",[0,0])}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* *........................................................* */}
        {/* This is the second table */}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} sx={{padding: 3}}>
                <Typography variant="h4" gutterBottom component="div">
                  Cash & Coins
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
              <TableCell sx={{paddingLeft:8}}  align="center" style={{ borderBottom: "none" }}>
                {funbun("Manage")}
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
              <TableCell sx={{paddingLeft:8}}  align="center">{funbun("Manage")}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
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
    // <TableContainer>
    // <Table>
    // <TableBody>
    //         <TableRow>
    //           <TableCell rowSpan={2} />
    //           <TableCell colSpan={3}>Subtotal</TableCell>
    //           <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
    //         </TableRow>
    //         <TableRow>
    //           <TableCell>Tax</TableCell>
    //           <TableCell align="right">{` %`}</TableCell>
    //           <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
    //         </TableRow>
    //         <TableRow>
    //           <TableCell colSpan={2}>Total</TableCell>
    //           <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
    //         </TableRow>
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
  );
}
