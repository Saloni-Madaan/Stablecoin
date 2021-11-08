import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="funds">
      <h1>
        <b>Funds</b>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
export default Funds;
