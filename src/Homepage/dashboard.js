import Funds from "./funds";
import Transactions from "./transactions";
import Portfolio from "./portfolio";
import Headers from "./headers";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Headers />
      </div>
      <div>
        <Funds />
      </div>
    </div>
  );
};

export default Dashboard;
{
  /* <Typography
  component="h2"
  variant="body2"
  color="inherit"
  align="center"
  noWrap
  sx={{ flex: 1 }}
></Typography>; */
}
