import * as React from "react";
import {Home, ArrowDropUp, Info } from "@material-ui/icons";
import img1 from './images/Capture2.jpg';
import AppBar from "@mui/material/AppBar";
import MuiGrid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import SellSharpIcon from "@mui/icons-material/SellSharp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography';
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
import {
  makeStyles, Paper,  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell, TableRow
} from "@material-ui/core";
import TextField from '@mui/material/TextField';

import { Button, Container } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Image from "material-ui-image";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { borderColor, color } from "@mui/system";
{/* <img src="https://i.ibb.co/kDH7ZdB/isa.png" alt="isa" border="0"></img> */}
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
    // color : "#FFFFFF"

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
const Grid1 = styled(MuiGrid)(({ theme }) => ({
  width: '80%',
  justifyContent: 'left',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 0),
  },
}));
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
const amount = "1,371.00";
export default function Checkout() {
  let date=new Date().toLocaleString().split(',')[0];
  let time=new Date().toLocaleString().split(', ')[1];
  const classes = useStyles();
  const theme = createTheme();
  return (
    // <body style={{backgroundColor: "#FF0000"}} >
    // <ThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1491591462767-3b91b2a19487?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3570&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light"
            ? t.palette.grey[50]
            : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
    <Box
    // container component="main" sx={{ height: "100vh" }}
    // container
    // spacing={0}
    // direction="column"
    // alignItems="center"
    // justifyContent="center"
    // style={{ minHeight: '100vh' }}
    sx={{
      //paddingTop:"4px",
      my: 10,
      mx: 30,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: 'white',
    //   backgroundImage:
    //       "url(https://images.unsplash.com/photo-1491591462767-3b91b2a19487?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3570&q=80)",
    //     backgroundRepeat: "no-repeat",
    //     backgroundColor: (t) =>
    //       t.palette.mode === "light"
    //         ? t.palette.grey[50]
    //         : t.palette.grey[900],
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    }} 
    >
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
          {/* <Typography variant="h6" color="inherit" color="white">
            Buy, Sell, this
          </Typography> */}
          <Typography variant="caption" color="black" alignText="right" sx={{ paddingLeft:80}}>
            Prices and Valuations updated at {time} GMT on {date} <InfoOutlinedIcon fontSize="small" sx={{ color: "#7EC8E3" }} />
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
          <img
           src="https://i.ibb.co/kDH7ZdB/isa.png" alt="isa" 
          width="400"
          height="120"
          //style={{ marginRight: "auto" }}
        ></img>
          {/* <Typography
              variant="body2"
              gutterBottom
              color="black"
              textAlign="left"
            >
              Your ISA Allowance
            </Typography> */}
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
      <Grid1 container>
      <Grid1 item xs>
      <Card style={{backgroundColor: "#116394",display: 'block',borderRadius: 1,
    width: '14vw',
    height: '8vw'}}>
          <CardContent textAlign="center" sx={{paddingLeft:13,paddingTop:5}}>
            <MonetizationOnOutlinedIcon/><br/>
            <Typography variant="h6" color="white" gutterBottom>BUY</Typography>
            </CardContent>
        </Card>
      
      </Grid1>
      <Grid1 item xs>
      
      <Card sx={{border: 2,backgroundColor: "#F7F7F7",display: 'block',borderRadius: 1,borderColor: 'primary.main',
      borderBottomWidth: 4,borderTopWidth: 2,
    width: '14vw',
    height: '8vw'}}>
      
          <CardContent textAlign="center" sx={{paddingLeft:13,paddingTop:5,marginRight: 16, flexGrow: 1,}}>
            <SellSharpIcon /><br/>
            <Typography sx={{flexGrow: 1,}} variant="h6" color="black" gutterBottom>Sell</Typography>
            </CardContent>
        </Card>
      
      </Grid1>
      <Grid1 item xs>
      
      <Card sx={{border: 2,backgroundColor: "#F7F7F7",display: 'block',borderRadius: 1,borderColor: 'primary.main',
      borderBottomWidth: 4,borderTopWidth: 2,
    width: '14vw',
    height: '8vw'}}>
      
          <CardContent textAlign="center" sx={{paddingLeft:10,paddingTop:5,marginRight: 12, flexGrow: 1,}}>
            <SwapHorizIcon sx={{paddingLeft:4,marginRight: 12, flexGrow: 1,}}/><br/>
            <Typography sx={{flexGrow: 1,}} variant="h6" color="black" gutterBottom>SWITCH</Typography>
            </CardContent>
        </Card>
      
      </Grid1>
        </Grid1>
        


        {/* This is here for space only */}


        {/* <Card elevation={0} style={{backgroundColor: "white",display: 'block',borderRadius: 0,border:0,
    width: '10vw',
    height: '8vw'}}>
          <CardContent textAlign="center" sx={{paddingLeft:13,paddingTop:5}}>
           
            <Typography variant="h6" color="white" gutterBottom>BUY</Typography>
            </CardContent>
        </Card> */}
        {/* The Space Ends Here */}

        

{/* This is here for space only */}


{/* <Card elevation={0} style={{backgroundColor: "white",display: 'block',borderRadius: 0,border:0,
    width: '10vw',
    height: '8vw'}}>
          <CardContent textAlign="center" sx={{paddingLeft:13,paddingTop:5}}>
           
            <Typography variant="h6" color="white" gutterBottom>BUY</Typography>
            </CardContent>
        </Card> */}
        {/* The Space Ends Here */}


        

      <br/>
      <br/>
      <br/>

      <AppBar position="static">
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
          <img
          src= {img1} alt=""
          width="300"
          height="400"
        ></img>
       
<Container> 
<React.Fragment>
  <Toolbar component="nav">

          <Typography variant="h6" className={classes.logoLg} style={{ color: "black" }}>
            Investment name <ArrowDropUp/>
          </Typography>
          <Typography variant="h6" className={classes.logoLg} style={{ color: "black" }}>
            Latest buy price <Info/>
          </Typography>
          <Typography style={{ color: "black" }}>Invest By:</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: 'fit-content',
              border: (theme) => `1px solid ${theme.palette.divider}`,
              // borderRadius: 1,
              // bgcolor: '#414956',
              // color: 'text.secondary',
              '& svg': {
                m: 1.5,
              },
              '& hr': {
                mx: 0.5,
              },
            }}
          >
            <Button color="inherit" href=""
              style={{ borderWidth: 1 }, { borderColor: 'rgb((255,255,255))' }, { color: "#FFFFFF" }, { backgroundColor: "#414956" }}>
              Amount($)
            </Button>

            
            <Button
              style={{ color: "black" }, { backgroundColor: "#FFFFFF" }}>
             <Typography variant="button" display="block" gutterBottom color="black">
      % of lump sum
      </Typography>
            </Button>

            <Divider orientation="vertical" flexItem />
            <Button
              style={{ borderWidth: 1 }, { color: "#000000" }, { backgroundColor: "#FFFFFF" }}>
                <Typography variant="button" display="block" gutterBottom color="black">
                Amount (USDT)
      </Typography>
              
            </Button>

           




          </Box> </Toolbar> 

          <br></br>

         
            <Toolbar component="nav">

            <TableContainer component={Paper}>
        <Table>
          <TableRow style={{backgroundColor: "#F7F7F7"}} >
           <TableCell colSpan={5}> OEICs and Unit trusts (1)</TableCell>
          </TableRow>

          <TableRow>
            <TableCell><b style={{ color: "#006193" }}>TM Stonehage Fleming Opportunities Fund C <br></br> Acc</b></TableCell>
            <TableCell> <b style={{fontSize:20}}> {amount}p </b></TableCell>
            <TableCell>
            
            
            
      <TextField id="outlined-basic" label="$  0.00" variant="outlined" sx={{
        '& > :not(style)': { m: 1, width: '15ch' },
      }}/>
     
    
            {/* <Divider orientation="vertical" flexItem /> */}

           </TableCell>
           <TableCell>
            <Button 
              style={ { backgroundColor: "#186AAD" }}>
              <Typography color="white">Buy</Typography>
            </Button>
            </TableCell>
            <TableCell style={{fontSize:20}}>x</TableCell>

           

          </TableRow>

          
        </Table> </TableContainer>
          </Toolbar>

          <Toolbar component = "nav">

          <Typography variant="h6" className={classes.logoLg} style={{ color: "black" }}>
            
          </Typography>

          <Typography variant="h6" style={{ color: "black" }}>Total</Typography>

          
          
          <div><TableContainer><Table><TableRow>
          
            <TableCell></TableCell>
            <TableCell  style={{backgroundColor: "#B6CBE1"}}></TableCell>
              <TableCell  style={{backgroundColor: "#B6CBE1"}}></TableCell>
            <TableCell style={{backgroundColor: "#B6CBE1"}}>
              <Typography color="black"> $ 0.00 </Typography> </TableCell>
            <TableCell style={{backgroundColor: "#B6CBE1"}}>
            <Button sx={{
              display: 'flex',
              alignItems: 'center',
              width: 'fit-content',
              border: (theme) => `1px solid ${theme.palette.divider}`,
              
              bgcolor: '#F7741E',
              color: 'white',
              '& svg': {
                m: 1.5,
              },
              '& hr': {
                mx: 0.5,
              },
            }}>
              Buy(0)
              </Button></TableCell>

              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>

          </TableRow></Table></TableContainer></div>

         
          
          {/* <Card sx={{border: 2,backgroundColor: "#F7F7F7",display: 'block',borderRadius: 1,borderColor: 'primary.main',
    width: '14vw',
    height: '8vw'}}>
      
          <CardContent >
            
            <Typography sx={{flexGrow: 1,}} variant="h6" color="black" gutterBottom>$ 0.00</Typography>
            </CardContent>
        </Card> */}


          </Toolbar>

          <br></br>

          </React.Fragment>


          </Container>

       

        </Toolbar>
      </AppBar>



        


    </Box>
    </Grid>
     </ThemeProvider>
    // </body>
  );
}