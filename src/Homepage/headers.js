import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
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
    borderColor:'#000450'

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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed" >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg} className={classes.ArrowDownwardSharp}>
          Personal investing  <ArrowDownwardSharp/>
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          FIL
        </Typography>
        
    <div>
      <Button color = "inherit" href="https://www.fidelity.com/customer-service/phone-numbers/international" style={{borderWidth:1},{borderColor:'rgb((255,255,255))'}}>
      Help&Support 
    </Button>
    <Button color = "inherit" className={classes.Help, classes.butto}>
      What's new <Help/>
    </Button>
    <Button color = "inherit" href="https://www.fidelityinternational.com/" className={classes.Home}>
      Back to Fidelity <Home/>
    </Button>
    <button class="inline-flex items-center bg-red text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
      
    </button>
    </div>
    
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;