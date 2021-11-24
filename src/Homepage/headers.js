import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import Link from "@mui/material/Link";
import {
  makeStyles,
} from "@material-ui/core";
import {Home, ArrowDownwardSharp } from "@material-ui/icons";
import { Button } from "@mui/material";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '60%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 0),
  },
}));
const Grid1 = styled(MuiGrid)(({ theme }) => ({
  width: '50%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 0),
  },
}));
const Web3 = require("web3");
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: '#414956'
    
  },
  logoLg: {
    display: "none",
    flexGrow : 1,
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
 
  Help:{
    display: "flex",
    alignItems: "center",
  },

  ArrowDownwardSharp:{
    display: "flex",
    alignItems: "center",

  },

  butto:{
    borderWidth:3,
    borderColor:'#000450',
    color : "#FFFFFF"

  },
  
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  links:{
    contrastText: "white",
    // marginCenter: theme.spacing(10),
    alignItems: "center",

  }
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
  { title: "Profile", url: "/dashboard/portfolio" },
  { title: "Cart", url: "/dashboard/cart" },
  { title: "Watchlist", url: "/" },
  { title: "Documents & Messages", url: "/" },
  { title: "Transaction History & Reports", url: "/dashboard/transactions" },
  {title: "Manage Investments", url: "/" },
  { title: "Summary", url: "/dashboard" },
  
];
const Header = () => {
  let date=new Date().toLocaleString().split(',')[0];
  let time=new Date().toLocaleString().split(', ')[1];
  let [balance, setbalance] = useState(0);
  // let [paymentStatus, setPaymentStatus] = useState(false);
  // let [paymentText, setPaymentText] = useState("Wallet Not Found !!");
  // let [showEtherScan, setShowEtherScan] = useState(false);
  // const [disable, setDisable] = useState(false);
  // let wallet = true;
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
      <Toolbar className={classes.toolbar} component="nav"
        variant="dense"
        sx={{
          overflowX: "auto",
        }}>
        <Typography variant="h8" className={classes.logoLg} className={classes.ArrowDownwardSharp}
        style={{color:"#FFFFFF"}}
        >
          Personal investing  <ArrowDownwardSharp/>
        </Typography>
        <Typography variant="h8" className={classes.logoSm}>
          FIL
        </Typography>
        
    <div>
    <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: '#414956',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
      <Button color = "inherit" href="https://www.fidelity.com/customer-service/phone-numbers/international" 
      style={{borderWidth:1},{borderColor:'rgb((255,255,255))'}, {color:"#FFFFFF"}}>
      Help&Support 
    </Button>
    <Divider orientation="vertical" flexItem />
    <Button color = "inherit" className={classes.Help, classes.butto}
    style={{borderWidth:1},{borderColor:'rgb((255,255,255))'}, {color:"#FFFFFF"}}>
      What's new? 
    </Button>
    <Divider orientation="vertical" flexItem />
    <Button color = "inherit" href="https://www.fidelityinternational.com/" className={classes.Home}
     style={{borderWidth:1},{borderColor:'rgb((255,255,255))'}, {color:"#FFFFFF"}}>
     Back to Fidelity <Home/> 
    </Button>
    <Divider orientation="vertical" flexItem />
    <Button  color = "primary" 
    style={{borderWidth:1},{borderColor:'#0000FF'}, {color:"#FFFFFF"}}
    href="/">Logout
      
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
              {section.title} <KeyboardArrowDownTwoToneIcon fontSize="small"/>
            
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

      <Toolbar className={classes.toolbar} component="nav"
        variant="dense"
        sx={{
          overflowX: "auto",
          
        }}>
            
          <Typography  variant="h6" className={classes.logoLg} 
        style={{font: "10"},{color:"#FFFFFF"}} sx={{paddingLeft: "100px"}}>
        
          <Typography variant="caption" display="block" gutterBottom>
        Prices and valuations updated at {time} IST on {date} <InfoOutlinedIcon fontSize="small" />
      </Typography>
          All accounts (6) <KeyboardArrowDownTwoToneIcon fontSize="small"/> 
          <br/>
          <Typography sx={{paddingTop:1}} variant="h5" gutterBottom component="div">
        $119,645.93
        <Typography variant="caption" display="block" gutterBottom>
        Investment+ Total Cash and Coins <InfoOutlinedIcon fontSize="small" />
      
      </Typography>
      </Typography>
           <br></br> 
           <Grid container>
      <Grid item xs>
      <Typography variant="h5" gutterBottom component="div">
      $10,000
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
              Cash available to invest <InfoOutlinedIcon fontSize="small" />
      </Typography> 
      
      </Grid>
      <Grid item xs>
      <Typography variant="h5" gutterBottom component="div">
      T {balance}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
              Coins available to invest <InfoOutlinedIcon fontSize="small" />
      </Typography>
            </Grid>
    </Grid>           
    {/* <Typography variant="h5" gutterBottom component="div">
           $10,000 {"     "} T {balance} 
        </Typography> */}
{/*         
        <Typography variant="caption" gutterBottom component="div">
           Cash available to invest <InfoOutlinedIcon fontSize="small" /> {"     "}
        </Typography> */}
            
          <br/>
          <Grid1 container>
      <Grid1 item xs>
      
      <Button sx={{ ':hover': {
      bgcolor: '#82C725', // theme.palette.primary.main
      color: 'white',
    },backgroundColor: "#82C725",borderRadius: 0,paddingTop:2,paddingBottom:2,paddingLeft:5,paddingRight:5}} variant="contained">Top Up  </Button>
      </Grid1>
      <Grid1 item xs>
      <Button sx={{':hover': {
      bgcolor: '#FFFEFF', // theme.palette.primary.main
      color: 'black',
    }, backgroundColor: "#FFFEFF",color:"black",borderRadius: 0,paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4}} variant="contained">Invest Now</Button>
            </Grid1>
    </Grid1>
    <Typography sx={{paddingTop:2}} variant="overline" display="block" gutterBottom>
        <u>Show Customer Reference Number</u>
      </Typography>
          {/* <Button sx={{ backgroundColor: "#82C725",borderRadius: 1}} variant="contained">Top Up  </Button>
          <Button sx={{ backgroundColor: "#414956",color:'#414956',border:"none",outline:"none"}} variant="contained">Top Up</Button>
          <Button sx={{ backgroundColor: "#FFFEFF",color:"black",borderRadius: 1,}} variant="contained">Invest Now</Button> */}
          </Typography>
          <img
           src="https://i.ibb.co/gF2MBFs/heDER.png" alt="heDER" 
          width="1000"
          height="400"
          style={{ marginRight: "auto" ,paddingRight:18}}
        ></img>
        </Toolbar>
    </React.Fragment>
  );
};

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;