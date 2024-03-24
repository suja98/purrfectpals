import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../components/LandingPage/Nav";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Signup() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  return (
    <>
      <Helmet>
        <title>Signup</title>
        <meta name="description" content="Create your account." />
      </Helmet>
      <Navbar />
      <div
        className="h-screen w-screen"
        style={{ backgroundColor: "var(--background-body)" }}
      >
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div
            className="flex rounded-lg shadow-lg w-full sm:w-3/4  lg:w-3/5 bg-white sm:mx-0"
            style={{
              height: "750px",
              backgroundColor: "var(--dark-card)",
              color: "var(--main-text)",
            }}
          >
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-semibold mt-6 mb-8 md:text-2xl">
                  Create your account
                </h1>
                <form className="form-horizontal w-3/4 mx-auto">
                  <label
                    className="font-medium block mb-1 mt-4"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-700 focus:border-gray-400 focus:outline-none"
                    id="username"
                    type="text"
                    autoComplete="off"
                    required
                  />
                  <label
                    className="font-medium block mb-1 mt-4"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-700 focus:border-gray-400 focus:outline-none"
                    id="email"
                    type="email"
                    autoComplete="off"
                    required
                  />

                  <label
                    className="font-medium block mb-1 mt-4"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative w-full">
                    <input
                      className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-700 focus:border-gray-400 focus:outline-none"
                      id="password"
                      type={showPassword1 ? "text" : "password"}
                      autoComplete="off"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {password && (
                      <span
                        className="hover:bg-gray-300 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer z-10 absolute right-3 top-3"
                        onClick={togglePasswordVisibility1}
                      >
                        {showPassword1 ? <FaRegEyeSlash /> : <FaRegEye />}
                      </span>
                    )}
                  </div>

                  <label
                    className="font-medium block mb-1 mt-4"
                    htmlFor="repeat-password"
                  >
                    Repeat your password
                  </label>
                  <div className="relative w-full">
                    <input
                      className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-700 focus:border-gray-400 focus:outline-none"
                      id="repeat-password"
                      type={showPassword2 ? "text" : "password"}
                      autoComplete="off"
                      required
                      value={passwordRepeat}
                      onChange={(e) => setPasswordRepeat(e.target.value)}
                    />
                    {passwordRepeat && (
                      <span
                        className="hover:bg-gray-300 rounded px-2 py-1 text-sm text-gray-400 font-mono cursor-pointer z-10 absolute right-3 top-3"
                        onClick={togglePasswordVisibility2}
                      >
                        {showPassword2 ? <FaRegEyeSlash /> : <FaRegEye />}
                      </span>
                    )}
                  </div>
                  <label className="inline-flex items-center mt-3 ">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-gray-400 "
                      name="remember"
                    />
                    <span className="ml-2 mt-1">Remember me</span>
                  </label>
                  <p className="mt-3 md:text-sm">
                    By creating an account you agree to our{" "}
                    <a
                      href="!#"
                      className="text-amber-400 hover:text-amber-500"
                    >
                      Terms & Privacy
                    </a>
                    .
                  </p>
                  <button
                    className="w-full bg-main-800 hover:bg-main-900 text-main-text font-semibold py-2 px-4 rounded text-xl mt-3"
                    type="submit"
                  >
                    Sign Up
                  </button>

                  <p className="mt-6 text-sm text-center">
                    Already have an account?
                    <Link
                      to="/login"
                      className="text-amber-400 hover:text-amber-500 focus:text-main-900 font-medium focus:outline-none focus:underline transition ease-in-out duration-150"
                    >
                      {" "}
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div
              className="hidden md:block md:w-1/2 rounded-r-lg"
              style={{
                background:
                  "url('https://img.freepik.com/free-photo/dog-sticking-out-his-tongue-looking-photographer_23-2148366946.jpg?t=st=1711010229~exp=1711013829~hmac=6e0591e1a7e9e5e1fb74d91b660b2656bffc3bc9bc25a5e02fc6ce60c2076428&w=740')",
                backgroundSize: "cover",
                height: "750px",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
