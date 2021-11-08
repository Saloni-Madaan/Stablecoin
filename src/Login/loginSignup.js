import { useState } from "react";
import Login from "./login";
import Signup from "./signup";
const LoginSignup = () => {
  const userLogin = () => {};
  const userSignup = () => {};

  const [signup, setSignup] = useState(false);
  return <>{signup ? <Signup /> : <Login />}</>;
};
export default LoginSignup;
