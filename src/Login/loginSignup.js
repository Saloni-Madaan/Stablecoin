import { useState } from "react";
const LoginSignup = () => {
  const [signup, setSignup] = useState(false);
  return <>{signup ? <h1>Signup</h1> : <h1>Login</h1>}</>;
};
export default LoginSignup;
