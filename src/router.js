import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignup from "./Login/loginSignup";
import Signup from "./Login/signup";
import Dashboard from "./Homepage/dashboard";
import Funds from "./Homepage/funds";
import Portfolio from "./Homepage/portfolio";
import Cart from "./Homepage/cart";
import data from "./Homepage/data";
import Transactions from "./Homepage/transactions";
import PaymentPage from "./Homepage/paymnetPage";
import { useState } from "react";

//*--------------------------------------------------------------------------------------------*

const AllRouterPath = () => {

  const {datas } = data;
  const [cartItems, setCartItems] = useState([])
  function handleAddProduct  (data)  {
    console.log(data)
    // const ProductExist = cartItems.find((item) => item.id === data.id);
    setCartItems([...cartItems, data]);

    console.log(cartItems.length)
  }


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginSignup />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/dashboard/funds">
          <Funds data={datas} cartItems={cartItems} handleAddProduct={handleAddProduct}/>                             
        </Route>
        <Route exact path="/dashboard/cart">
          <Cart cartItems={cartItems} handleAddProduct={handleAddProduct}/>
        </Route>
        <Route exact path="/dashboard/portfolio">
          <Portfolio />
        </Route>

        <Route exact path="/dashboard/transactions">
          <Transactions />
        </Route>

        <Route exact path="/dashboard/paymentpage">
          <PaymentPage />
        </Route>
      </Switch>
    </Router>
  );
};
//*--------------------------------------------------------------------------------------------*

export default AllRouterPath;
