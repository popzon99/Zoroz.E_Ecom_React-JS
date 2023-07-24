import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";
import backgroundImage from "../../assets/images/background.jpg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Please enter your email");
    }

    if (!password) {
      setErrPassword("Please create a password");
    }

    if (email && password) {
      setSuccessMsg(
        `Hello! Thank you for signing up with Zoroz.e. We are processing your information. Stay connected, and additional details will be sent to your email address (${email}).`
      );
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}
    >
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg px-8 py-6 space-y-4">
        <h2 className="text-2xl font-bold">Welcome to Zoroz.e</h2>
        {successMsg && (
          <div className="text-green-500 text-sm">{successMsg}</div>
        )}
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="w-full">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={handleEmail}
            />
            {errEmail && <div className="text-red-500 text-xs">{errEmail}</div>}
          </div>
          <div className="w-full">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={handlePassword}
            />
            {errPassword && (
              <div className="text-red-500 text-xs">{errPassword}</div>
            )}
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-purple-600"
          >
            Sign In
          </button>
        </form>
        <div className="text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
