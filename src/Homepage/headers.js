// const Headers = () => {
//   return (
//     <div className="headers">
//       <h1>
//         <b>Headers</b>
//       </h1>
//     </div>
//   );
// };
// export default Headers;

// *-----------------------------


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
import { Cancel, Mail, Notifications, Search,Help } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: '#414956'
  },
  logoLg: {
    display: "none",
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
        <Typography variant="h6" className={classes.logoLg}>
          Personal investing
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          FIL
        </Typography>
          {/* <div className={classes.search}>
            <Search />
            <InputBase placeholder="Search..." className={classes.input} />
            <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
          </div>
          <div className={classes.icons}>
            <Search
              className={classes.searchButton}
              onClick={() => setOpen(true)}
            /> */}
          {/* <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge> */}


          {/* <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          /> */}
        {/* </div> */}

<div className= {classes.icons}>
        
      {/* <a href ="https://www.fidelity.com/customer-service/phone-numbers/international" class="mr-5 hover:text-gray-900" >Help & support</a> */}
       <a  className={classes.Help}>Help & support  <Help/></a>
      <a >What's new  </a>
      {/* <a href=" https://www.fidelityinternational.com/" class="mr-5 hover:text-gray-900">Back to fidelity</a> */}
      
      <a >Back to fidelity  </a>

      {/* <Typography variant="h6" >
      Help & support
        </Typography>
        <Typography variant="h6" >
        What's new
        </Typography>
        <Typography variant="h6" >
        Back to fidelity
        </Typography> */}
      
  
    <button class="inline-flex items-center bg-red text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
      
    </button>
    </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
