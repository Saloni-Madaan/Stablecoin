import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//*--------------------------------------------------------------------------------------------*

const Signup = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signup", {
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
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Sign up
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Username</label>
            <input
              type="email"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              autoComplete="email"
              autoFocus
              placeholder="Your Email"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              autoComplete="email"
              autoFocus
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
              autoComplete="current-password"
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-nowrap justify-center items-center mt-6">
            <button
              className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark `}
              onClick={handleFormSubmit}
            >
              Signup
            </button>
            <button
              className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark hover:bg-green-700`}
              onClick={() => {
                history.push("/");
              }}
            >
              Login
            </button>
          </div>
          {/* <div className="flex flex-nowrap justify-center items-center mt-6"></div> */}
        </form>
      </div>
    </div>
  );
};

//*--------------------------------------------------------------------------------------------*

export default Signup;
