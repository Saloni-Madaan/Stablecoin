import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
      <h1>
        <b>Navbar</b>
      </h1>
      <ul>
        <li>
          {" "}
          <Link to="/dashboard/paymentPage">paymentPage</Link>
        </li>
        <li>
          {" "}
          <Link rel="stylesheet" to="/dashboard/portfolio">
            portfolio
          </Link>
        </li>
        <li>
          {" "}
          <Link rel="stylesheet" to="/dashboard/cart">
            cart
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
