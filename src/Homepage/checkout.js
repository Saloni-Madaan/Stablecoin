import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import SellSharpIcon from "@mui/icons-material/SellSharp";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MenuIcon from "@mui/icons-material/Menu";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import Divider from "@mui/material/Divider";
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CardContent from '@mui/material/CardContent';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Image from "material-ui-image";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 30,
  borderRadius: 5,
  // [`&.${linearProgressClasses.colorPrimary}`]: {
  //   backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  // },
  // [`& .${linearProgressClasses.bar}`]: {
  //   borderRadius: 5,
  //   backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  // },
}));
export default function Checkout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        <Box
          sx={{
            //flexGrow: 1,
            display: "flex",
            alignItems: "center",
            width: "fit-content",
            border: (theme) => `0px solid ${theme.palette.divider}`,
            borderRadius: 1,
            color: "text.secondary",
            "& svg": {
              m: 1.5
            },
            "& hr": {
              mx: 0.5
            }
          }}
        >
          <Typography variant="h4" color="black">
            Buy, Sell, Switch
          </Typography>
          <Typography variant="h6" color="inherit" color="white">
            Buy, Sell, this
          </Typography>
          <Typography variant="caption" color="black" alignText="right" sx={{ paddingLeft:116}}>
            Prices and Valuations updated at 14:08 GMT on 18/11/2021 <InfoOutlinedIcon fontSize="small" sx={{ color: "#7EC8E3" }} />
          </Typography>
        </Box>
      </div>

      <AppBar position="static" >
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#F7F7F7"
          }}
        >
          <Button
            sx={{ backgroundColor: "white",padding:2, borderColor: "white" }}
            variant="contained"
          >
            <Typography variant="h7" color="black">
              <b>Investment Isa</b>
              <br />
              <Typography variant="caption" color="black">
                {"LITX001295   $11,499"}
              </Typography>
            </Typography>
            <Divider orientation="vertical" flexItem />
            <KeyboardArrowDownSharpIcon sx={{ color: "black" }} />
            
          </Button>
          <Divider orientation="vertical" flexItem />
          <Typography
            variant="body2"
            gutterBottom
            color="black"
            textAlign="left"
          >
            Cash available to invest{" "}
            <InfoOutlinedIcon fontSize="small" sx={{ color: "#7EC8E3" }} />{" "}
            <br />
            <Typography
              variant="button"
              gutterBottom
              color="black"
              textAlign="left"
            >
              $984.33
            </Typography>
            <br />
            <Button variant="contained" style={{backgroundColor: "#036AAD",}}>
              Add cash
            </Button>
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography
            variant="body2"
            gutterBottom
            color="black"
            textAlign="left"
          >
            Coins available to invest{" "}
            <InfoOutlinedIcon fontSize="small" sx={{ color: "#7EC8E3" }} />{" "}
            <br />
            <Typography
              variant="button"
              gutterBottom
              color="black"
              textAlign="left"
            >
              T984.33
            </Typography>
            <br />
            <Button variant="contained" style={{backgroundColor: "#036AAD",}}>
              Add coins
            </Button>
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography
              variant="body2"
              gutterBottom
              color="black"
              textAlign="left"
            >
              Your ISA Allowance
            </Typography>
            <BorderLinearProgress variant="determinate" value={20} />
        </Toolbar>
      </AppBar>
      <Typography
        sx={{ paddingTop: 7 }}
        variant="h5"
        gutterBottom
        color="black"
        textAlign="left"
      >
        What would you like to do today?
      </Typography>
      <br/>
      <br/>
      <br/>
     
      {/* <Button variant='contained' style={{paddingTop:12,maxWidth: '280px', maxHeight: '180px', minWidth: '280px', minHeight: '180px'}}>BUY</Button> */}
      <AppBar  elevation={0} position="static" sx={{elevation:0,}}>
        <Toolbar
          variant="dense"
          sx={{
            border:0,
            paddingLeft: 4,
		paddingRight: 4,
            display: "flex",
            //justifyContent: "space-between",
            //alignSelf: 'flex-end',
            backgroundColor: "white"
          }}
        >
        <Card style={{backgroundColor: "#116394",display: 'block',borderRadius: 1,
    width: '14vw',
    height: '8vw'}}>
          <CardContent textAlign="center" sx={{paddingLeft:13,paddingTop:5}}>
            <MonetizationOnOutlinedIcon/><br/>
            <Typography variant="h6" color="white" gutterBottom>BUY</Typography>
            </CardContent>
        </Card>


        {/* This is here for space only */}


        <Card elevation={0} style={{backgroundColor: "white",display: 'block',borderRadius: 0,border:0,
    width: '10vw',
    height: '8vw'}}>
          <CardContent textAlign="center" sx={{paddingLeft:13,paddingTop:5}}>
           
            <Typography variant="h6" color="white" gutterBottom>BUY</Typography>
            </CardContent>
        </Card>
        {/* The Space Ends Here */}

        <Card sx={{border: 2,backgroundColor: "#F7F7F7",display: 'block',borderRadius: 1,borderColor: 'primary.main',
    width: '14vw',
    height: '8vw'}}>
      
          <CardContent textAlign="center" sx={{paddingLeft:13,paddingTop:5,marginRight: 16, flexGrow: 1,}}>
            <SellSharpIcon /><br/>
            <Typography sx={{flexGrow: 1,}} variant="h6" color="black" gutterBottom>Sell</Typography>
            </CardContent>
        </Card>

{/* This is here for space only */}


<Card elevation={0} style={{backgroundColor: "white",display: 'block',borderRadius: 0,border:0,
    width: '10vw',
    height: '8vw'}}>
          <CardContent textAlign="center" sx={{paddingLeft:13,paddingTop:5}}>
           
            <Typography variant="h6" color="white" gutterBottom>BUY</Typography>
            </CardContent>
        </Card>
        {/* The Space Ends Here */}


        <Card sx={{border: 2,backgroundColor: "#F7F7F7",display: 'block',borderRadius: 1,borderColor: 'primary.main',
    width: '14vw',
    height: '8vw'}}>
      
          <CardContent textAlign="center" sx={{paddingLeft:10,paddingTop:5,marginRight: 12, flexGrow: 1,}}>
            <SwapHorizIcon sx={{paddingLeft:4,marginRight: 12, flexGrow: 1,}}/><br/>
            <Typography sx={{flexGrow: 1,}} variant="h6" color="black" gutterBottom>SWITCH</Typography>
            </CardContent>
        </Card>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
