import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Redirect } from "react-router";
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
        <Route exact path="/" element={<LoginSignup />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard/funds" element={<Funds />} />
        <Route exact path="/dashboard/cart" element={<Cart />} />
        <Route exact path="/dashboard/portfolio" element={<Portfolio />} />
        <Route
          exact
          path="/dashboard/transactions"
          element={<Transactions />}
        />
        <Route exact path="/dashboard/paymentpage" element={<PaymentPage />} />
      </Switch>
    </Router>
  );
};
//*--------------------------------------------------------------------------------------------*

export default AllRouterPath;
