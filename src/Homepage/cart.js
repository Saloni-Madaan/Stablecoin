import { React, useEffect, useState } from "react";
import axios from "axios";
const Web3 = require("web3");
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
let paymentAddress;
const web3 = new Web3(window.web3.currentProvider);
const contractInstance = new web3.eth.Contract(abi, tokenAddress);
const amount = 2;
const apiKey = "IG353536346StblC345";

//-----------------------------------------------------------------------------------------------------------------//

const Cart = () => {
  let [balance, setbalance] = useState(0);
  let [paymentStatus, setPaymentStatus] = useState(false);
  let [paymentText, setPaymentText] = useState("");
  const [disable, setDisable] = useState(false);
  //*--------------------------------------------------------------------------------------------*

  useEffect(() => {
    paymentAddress = window.ethereum.selectedAddress;
    userBalance();
  });

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
      .balanceOf(paymentAddress)
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
        description: "Fund1",
        amount: 1,
      },
      {
        description: "Fund2",
        amount: 1,
      },
    ],
  };
  //*--------------------------------------------------------------------------------------------*

  const initPayButton = async () => {
    let invoiceId;
    axios
      .post("/api/v1/invoice", itemsInCart)
      .then((response) => {
        invoiceId = response.data.invoiceId;
        console.log("Step 1: invoice id : ", invoiceId);
        return invoiceId;
      })
      .then((invoiceId) => {
        axios
          .get(`/api/v1/invoice/${invoiceId}`)
          .then((response) => {
            const invoiceData = response.data;
            console.log("Step 2  invoiceData : ", invoiceData);
            setPaymentStatus(true);
            setPaymentText("Payment Pending to be confirmed");
            return invoiceData;
          })
          .then((invoiceData) => {
            console.log("Step 3: ");
            const walletId = invoiceData.wallet.address;
            const tx = {
              from: paymentAddress,
              to: contractInstance._address,
              data: contractInstance.methods
                .transfer(walletId, web3.utils.toWei(amount.toString()))
                .encodeABI(),
            };

            web3.eth
              .sendTransaction(tx)
              .then(async (res) => {
                await res;
                console.log(
                  "Step 4 : response of transaction form metamask : ",
                  res
                );
                return res;
              })
              .then((res) => {
                let transactionData = {
                  invoiceData: invoiceData,
                  invoiceId: invoiceId,
                  res: res,
                };
                axios
                  .post("http://localhost:5000/transaction", transactionData)
                  .then((response) => {
                    console.log(
                      "Step 5: check if payment successfull : ",
                      response.data
                    );
                    setPaymentText("Payment Successfull");
                  })
                  .catch((error) => {
                    setPaymentText("Payment Failed");
                    console.log("Step 5: Some error occur : ", error);
                  });
              })
              .catch((err) => {
                setPaymentText("Payment Failed");
                console.log("Step 4 : error from metamask : ", err);
                return;
              });
          });
      });
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
      <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js/dist/web3.min.js"></script>
      <script src="https://unpkg.com/@metamask/legacy-web3@latest/dist/metamask.web3.min.js"></script>

      <script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
      <div className="bg-orange">
        <h1>Cart</h1>
        <button
          id="pay"
          disabled={disable}
          onClick={() => {
            // setDisable(true);
            initPayButton();
          }}
        >
          pay
        </button>

        <h2>Balance USDT : {balance}</h2>
        <h2>
          {paymentStatus ? (
            <>Payment Status : {paymentStatusText(paymentText)}</>
          ) : (
            <></>
          )}
        </h2>
      </div>
    </>
  );
};
//*--------------------------------------------------------------------------------------------*

export default Cart;
