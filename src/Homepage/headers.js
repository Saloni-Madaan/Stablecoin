import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const sections = [
  { title: "Portfolio", url: "/dashboard/portfolio" },
  { title: "Cart", url: "/dashboard/cart" },
  { title: "Transaction", url: "/dashboard/transactions" },
  { title: "Home", url: "/dashboard" },
];
const Header = () => {
  return (
    <React.Fragment>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          flexDirection: "row-reverse",
          overflowX: "auto",
        }}
      >
        <Link size="small" color="inherit" href="/" noWrap variant="body2">
          Logout
        </Link>

        <Typography
          variant="body2"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          Contact
        </Typography>
      </Toolbar>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "text-gray-900",
          flexDirection: "row-reverse",
          overflowX: "auto",
        }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
        <Link></Link>
        <img
          src="https://findlogovector.com/wp-content/uploads/2019/11/fidelity-international-logo-vector.png"
          width="100"
          height="50"
          style={{ marginRight: "auto" }}
        ></img>
      </Toolbar>
    </React.Fragment>
  );
};

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
