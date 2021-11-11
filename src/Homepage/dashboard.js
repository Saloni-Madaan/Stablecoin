import Navbar from "./navbar";
import Funds from "./funds";
import Transactions from "./transactions";
import Headers from "./headers";
import Portfolio from "./portfolio";
const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
];
const Dashboard = () => {
  return (
    <div>
      <div>
        <Headers title="header" sections={sections} />
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
