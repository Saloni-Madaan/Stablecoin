import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//*--------------------------------------------------------------------------------------------*
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
const Signup = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/signup", {
        userName: userName,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        if (err.response.status === 422) {
          alert("User already registered");
        }
      });
    console.log(email, password);
  };
  return (
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
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)",
            backgroundRepeat: "repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid align="center" item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ background: 'transparent', boxShadow: 'none'}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
              style={{
                backgroundColor: "white"
            }}
                onChange={(e) => setUserName(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
              style={{
                backgroundColor: "white"
            }}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
              style={{
                backgroundColor: "white"
            }}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
              color="primary"
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/" variant="body2">
                    {"Sign In "}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:5001/signup", {
//         userName: userName,
//         email: email,
//         password: password,
//       })
//       .then((res) => {
//         console.log(res);
//         history.push("/");
//       })
//       .catch((err) => {
//         if (err.response.status === 422) {
//           alert("User already registered");
//         }
//       });
//     console.log(email, password);
//   };
//   return (
//     <div className="h-screen flex bg-gray-bg1">
//       <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
//         <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
//           Sign up
//         </h1>

//         <form onSubmit={handleFormSubmit}>
//           <div>
//             <label htmlFor="email">Username</label>
//             <input
//               type="email"
//               className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
//               id="email"
//               autoComplete="email"
//               autoFocus
//               placeholder="Your Email"
//               onChange={(e) => setUserName(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
//               id="email"
//               autoComplete="email"
//               autoFocus
//               placeholder="Your Email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
//               id="password"
//               placeholder="Your Password"
//               autoComplete="current-password"
//               autoFocus
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="flex flex-nowrap justify-center items-center mt-6">
//             <button
//               className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark `}
//               onClick={handleFormSubmit}
//             >
//               Signup
//             </button>
//             <button
//               className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark hover:bg-green-700`}
//               onClick={() => {
//                 history.push("/");
//               }}
//             >
//               Login
//             </button>
//           </div>
//           {/* <div className="flex flex-nowrap justify-center items-center mt-6"></div> */}
//         </form>
//       </div>
//     </div>
//   );
// };

//*--------------------------------------------------------------------------------------------*

export default Signup;
