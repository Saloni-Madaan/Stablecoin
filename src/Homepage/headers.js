import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search,Help, Home, ArrowDownwardSharp } from "@material-ui/icons";
import { Button } from "@mui/material";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: '#414956'
    
  },
  logoLg: {
    display: "none",
    flexGrow : 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
 
  Help:{
    display: "flex",
    alignItems: "center",
  },

  ArrowDownwardSharp:{
    display: "flex",
    alignItems: "center",

  },

  butto:{
    borderWidth:3,
    borderColor:'#000450',
    color : "#FFFFFF"

  },
  
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  links:{
    contrastText: "white",
    // marginCenter: theme.spacing(10),
    alignItems: "center",

  }
}));



const sections = [
  { title: "Portfolio", url: "/dashboard/portfolio" },
  { title: "Cart", url: "/dashboard/cart" },
  { title: "Transaction", url: "/dashboard/transactions" },
  { title: "Home", url: "/dashboard" },
];
const Header = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  const totalBalance = 1000;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} component="nav"
        variant="dense"
        sx={{
          overflowX: "auto",
        }}>
        <Typography variant="h8" className={classes.logoLg} className={classes.ArrowDownwardSharp}
        style={{color:"#FFFFFF"}}
        >
          Personal investing  <ArrowDownwardSharp/>
        </Typography>
        <Typography variant="h8" className={classes.logoSm}>
          FIL
        </Typography>
        
    <div>
      <Button color = "inherit" href="https://www.fidelity.com/customer-service/phone-numbers/international" 
      style={{borderWidth:1},{borderColor:'rgb((255,255,255))'}, {color:"#FFFFFF"}}>
      Help&Support 
    </Button>
    <Button color = "inherit" className={classes.Help, classes.butto}
    style={{borderWidth:1},{borderColor:'rgb((255,255,255))'}, {color:"#FFFFFF"}}>
      What's new? 
    </Button>
    <Button color = "inherit" href="https://www.fidelityinternational.com/" className={classes.Home}
     style={{borderWidth:1},{borderColor:'rgb((255,255,255))'}, {color:"#FFFFFF"}}>
     Back to Fidelity <Home/> 
    </Button>
    <Button  color = "primary" 
    style={{borderWidth:1},{borderColor:'#0000FF'}, {color:"#FFFFFF"}}
    href="/">Logout
      
    </Button>
    </div>
    
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

      <Toolbar className={classes.toolbar} component="nav"
        variant="dense"
        sx={{
          overflowX: "auto",
        }}>
          <Typography variant="h6" className={classes.logoLg} 
        style={{font: "10"},{color:"#FFFFFF"}}
        >
          All accounts (6) <br></br> <br></br> 
          $      {totalBalance} <br></br> 
          Investment + Total cash<br></br> 
          <br></br>

          $10,000  <br></br> 
          Cash available to invest 
          </Typography>

          <img
          // src="https://findlogovector.com/wp-content/uploads/2019/11/fidelity-international-logo-vector.png"
          width="900"
          height="300"
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