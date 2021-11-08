import Navbar from "./navbar";
import Funds from "./funds";
import Transactions from "./transactions";
import Headers from "./headers";
import Portfolio from "./portfolio";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Headers />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Funds />
      </div>
    </div>
  );
};

export default Dashboard;
