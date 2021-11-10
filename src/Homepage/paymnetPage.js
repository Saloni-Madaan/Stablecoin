import Payment from "./paymentPageApi";
import React, { useState } from "react";

const PaymentPage = () => {
  const [PaymentData, setPaymentData] = useState(Payment)
  return (
    
    <div>
      <h1>Payment Page</h1>
      {PaymentData.map((curElem)=>{
                console.log(curElem)
                return(
        
                 <div className="Payment" key={curElem._id}>
                          <span className="Payment-id">Payment id - {curElem._id}</span><br/>
                          <span className="Payment-items">{curElem.items.description}</span><br/>
                          <span className="Payment-items">{curElem.items.amount}</span><br/>
                          <span className="Payment-totalAmount">{curElem.totalAmount}</span><br/>
                          <span className="Payment-paidAmount">{curElem.paidAmount}</span><br/>
                          <span className="Payment-currency">{curElem.currency}</span><br/>
                          <span className="Payment-state">{curElem.state}</span><br/>
                          <span className="Payment-expires">{curElem.expires}</span><br/>
                          <span className="Payment-created">{curElem.created}</span><br/>
                          <span className="Payment-wallet">{curElem.wallet._id}</span><br/>
                          <span className="Payment-wallet">{curElem.wallet.address}</span><br/>
                          <span className="Payment-wallet">{curElem.wallet.key}</span><br/>
                          <span className="Payment-wallet">{curElem.wallet.created}</span><br/>
                          <span className="Payment-confirmBlock">{curElem.confirmBlock}</span><br/>
                          <span className="Payment-_rev">{curElem._rev}</span><br/>

                      </div>
                )
                }) }
    </div>
  );
};
export default PaymentPage;
