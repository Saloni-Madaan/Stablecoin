import Transaction from "./transactionApi.js";
import React, { useEffect, useState } from "react";

const Transactions = () => {

  const [transactionData, setTransactionData] = useState(Transaction)
  return (
    <div className="Transaction">
      <h1>Transactions Page</h1>          
      {transactionData.map((curElem)=>{
                // console.log(curElem)
                return(        
                 <div className="Transaction_" key={curElem.transaction_id}>
                          <span className="transaction-id">{curElem.transaction_id}</span><br/>
                          <span className="transaction-items">{curElem.items}</span><br/>
                          <span className="transaction-totalAmount">{curElem.totalAmount}</span><br/>
                          <span className="transaction-paidAmount">{curElem.paidAmount}</span><br/>
                          <span className="transaction-currency">{curElem.currency}</span><br/>
                          <span className="transaction-state">{curElem.state}</span><br/>
                          <span className="transaction-date">{curElem.date}</span><br/><br></br>

                      </div>
                )
                }) }
    </div>
  );
};
export default Transactions;