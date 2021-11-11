import { Link } from "react-router-dom";
import { createContext, useContext, useReducer } from "react";  //
import data from "./data";
import { useState } from "react";
import { ComC} from "./cart"

// const Carttt = createContext();
// const Funds = ({handleAddProduct}) => {
  const Funds = () => {

  const [cartItems, setCartItems] = useState([])


  const handleAddProduct = (data) => {
    console.log(data)
    // const ProductExist = cartItems.find((item) => item.id === data.id);
    setCartItems([...cartItems, data]);
    // arr.push(data.id)

    console.log(cartItems)
    
  }

  // const[cart, setCart] = useState ([])
  // const addToCart = (data) => {
  //   console.log("we are in add to cart")
  //   setCart([...cart, data]);
  // };

  
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
            <button className="container bg-green-light" onClick={()=>handleAddProduct(item)}>add</button>
          
          </div>
        );


        
      })}
        {/* <footer>
              <button>({cart.length})</button>
            </footer> */}

     
    </div>
  );
};
export default Funds;
// export {Carttt}
