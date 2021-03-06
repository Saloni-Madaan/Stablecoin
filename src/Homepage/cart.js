import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Headers from "./headers";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import data from "./data";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const Web3 = require("web3");

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

//*--------------------------------------------------------------------------------------------*

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
let userWalletAddress, walletId;
let blockHash;
const web3 = new Web3(window.web3.currentProvider);
const contractInstance = new web3.eth.Contract(abi, tokenAddress);
const amount = 100;
const apiKey = "IG353536346StblC345";

//-----------------------------------------------------------------------------------------------------------------//

const Cart = () => {
  const { id, m } = useParams();
  console.log("uid", id, m);

  let rows = data[m];
  let row = rows["stocks"][id];
  // console.log("product props is", this.props.location.productdetailProps);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const [openLoder, setOpen] = useState(false);

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
    <>
      <Headers />
      <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js/dist/web3.min.js"></script>
      <script src="https://unpkg.com/@metamask/legacy-web3@latest/dist/metamask.web3.min.js"></script>
      <script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
      <Paper component={Stack} direction="column" justifyContent="center">
        <div div style={{ width: "100%" }}>
          <TableContainer component={Paper}>
            <Table
              style={{ width: 400, margin: "auto" }}
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Fund Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Grid container justifyContent="center">
          <Div>Total Amount: {amount}</Div>
        </Grid>
        <Grid container justifyContent="center">
          <Div>Current Balance: {balance}</Div>
        </Grid>
        <Grid container justifyContent="center">
          <Button
            variant="contained"
            id="pay"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Checkout
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "pay",
            }}
          >
            <MenuItem onClick={handleClose}>Card</MenuItem>
            <MenuItem
              disabled={disable}
              onClick={() => {
                setDisable(true);
                initPayButton();
              }}
            >
              USDT
            </MenuItem>
            <MenuItem onClick={handleClose}>Cheque</MenuItem>
          </Menu>
        </Grid>
        <Grid container justifyContent="center">
          <Div>
            {paymentStatus ? (
              <>
                Payment Status :{" "}
                <h4>
                  {" "}
                  {paymentStatusText(paymentText)}
                  {/* <a  ----------------------------------// Link to take them to the etherscan transaction page 
                    href={`https://rinkeby.etherscan.io/tx/${blockHash}`}
                    target="_blank"
                  >
                    Click here to see transaction details
                  </a> */}
                </h4>
              </>
            ) : (
              <></>
            )}
          </Div>
        </Grid>
      </Paper>
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
      {showEtherScan ? (
        <Grid container justifyContent="center">
          <a
            href={`https://rinkeby.etherscan.io/tx/${blockHash}`}
            target="_blank"
          >
            Click here to see transaction details
          </a>{" "}
          */}
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};
//*--------------------------------------------------------------------------------------------*
export default Cart;
