import { Link } from "react-router-dom";
import data from "./data";
// import { createContext, useContext, useReducer } from "react";

// const Cart = createContext();    
const Funds = () => {

  // const [state, dispatch] = useReducer(cartReducer, {   ///// 
  //   products: data,
  //   cart: [],
  // });                                          /////
  return (
    <div className="funds align-middle">
      <h1>
        <b className="bg-green-darker xl:visible">Funds</b>
      </h1>
      {data.map((item, index) => {
        const { name, description, date, value } = item;
        return (
          <div className="funds-item" key={index}>
            <div className="funds-item-content">
              <h2>{name}</h2>
              <p>{description}</p>
              <p>{date}</p>
              <p>{value}</p>
            </div>
            
            {/* <Cart.Provider value={[data]}>   
              <Cart/>           
            </Cart.Provider> */}


            <button className="container bg-green-light">add</button>
          </div>
        );
      })}
    </div>
  );
};
export default Funds;

// export const CartState = () => {       
//   return useContext(Cart);               
// };
