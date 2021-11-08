import abi from "./abi";

const Web3 = require("web3");
const Cart = () => {
  const web3 = new Web3(window.web3.currentProvider);

  const contractInstance = new web3.eth.Contract(
    abi,
    "0xA6363f2718E5Aae3fDB057d93106C5EC7B57FcFe"
  );
  const amount = 10;

  window.addEventListener("load", async () => {
    if (await window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable();
        initPayButton();
      } catch (err) {
        // $("#status").html("User denied account access", err);
        console.log("User denied account access", err);
      }
    } else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      initPayButton();
    } else {
      // $("#status").html("No Metamask (or other Web3 Provider) installed");
      console.log("No Metamask (or other Web3 Provider) installed");
    }
  });

  const initPayButton = () => {
    // paymentAddress is where funds will be send to
    const tx = {
      from: "0x93aA18531df88B653bC25164bF61512ad65F88C9",
      to: contractInstance._address,
      data: contractInstance.methods
        .transfer(
          "0xa26C1600AC48d7D29b0570422b14Ee99ca355Dfc",
          web3.utils.toWei(amount.toString())
        )
        .encodeABI(),
    };
    web3.eth
      .sendTransaction(tx)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="bg-orange">
      <h1>Cart</h1>
      <button
        onClick={() => {
          // initPayButton();
        }}
      >
        pay
      </button>
    </div>
  );
};
export default Cart;
