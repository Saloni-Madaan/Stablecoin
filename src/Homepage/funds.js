import React, { useEffect, useState } from "react";
import { ArrowRightSharp } from "@material-ui/icons";
import { margin } from "@mui/system";
import MyAccordian from "./MyAccordian";
import Data from "./data.js";




const Funds = () => {

const[data,setData] = useState(Data);

  
  return (
    <div>

 <br></br>
 <br></br>
 <br></br>
 {
   data.map((curElem)=>{
     const {id} = curElem;
     return <MyAccordian key ={id} {...curElem} />
   })
 }
 
 


    </div>
  );
};
export default Funds;
