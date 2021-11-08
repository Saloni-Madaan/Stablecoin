import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignup from "./Login/loginSignup";
import Signup from "./Login/signup";
import Dashboard from "./Homepage/dashboard";
import Funds from "./Homepage/funds";
import Portfolio from "./Homepage/portfolio";
import Cart from "./Homepage/cart";
import Transactions from "./Homepage/transactions";
import PaymentPage from "./Homepage/paymnetPage";

//*--------------------------------------------------------------------------------------------*

const AllRouterPath = () => {
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
          <Funds />
        </Route>
        <Route exact path="/dashboard/cart">
          <Cart />
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
