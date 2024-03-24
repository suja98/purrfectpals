import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../components/LandingPage/Nav";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login to your account." />
      </Helmet>
      <Navbar />
      <div
        className="h-screen w-screen"
        style={{ backgroundColor: "var(--background-body)" }}
      >
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div
            className="flex rounded-lg shadow-lg w-full sm:w-4/5 md:w-4/5 lg:w-3/5 bg-white sm:mx-0"
            style={{
              height: "700px",
              backgroundColor: "var(--dark-card)",
              color: "var(--main-text)",
            }}
          >
            <div
              className="flex flex-col w-full p-4 rounded-l-lg"
              style={{ border: "solid 1px var(--dark-border)" }}
            >
              <div className="flex flex-col flex-1 justify-center mb-8">
                <p className="text-4xl text-center font-semibold mb-8">
                  Welcome Back
                </p>
                <form
                  className="form-horizontal w-3/4 mx-auto"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col mt-4">
                    <label className="font-medium" htmlFor="email">
                      Username or Email
                    </label>
                    <input
                      className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-700 focus:border-gray-400 focus:outline-none"
                      id="email"
                      type="text"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col mt-4 relative">
                    <label className="font-medium" htmlFor="email">
                      Password
                    </label>
                    <div className="relative w-full">
                      <input
                        className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-700 focus:border-gray-400 focus:outline-none pr-12 font-mono"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="off"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {password && (
                        <span
                          className="hover:bg-gray-300 rounded px-2 py-1 text-sm text-gray-400 font-mono cursor-pointer z-10 absolute right-3 top-3"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className="w-full bg-main-800 hover:bg-main-900 text-main-text font-semibold py-2 px-4 rounded text-xl"
                    >
                      Login
                    </button>
                  </div>
                  <div className="mt-4">
                    <a
                      className="no-underline text-blue-dark text-sm"
                      href="!#"
                    >
                      Forgot Your Password?
                    </a>
                  </div>
                  <p className="mt-10 text-center text-sm">
                    Not a member?{" "}
                    <Link
                      to="/signup"
                      className="font-semibold leading-6 text-amber-400 hover:text-amber-500"
                    >
                      Signup
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div
              className="hidden md:block md:w-full rounded-r-lg"
              style={{
                background:
                  "url('https://img.freepik.com/free-photo/portrait-lovely-dog-sticking-out-his-tongue_23-2148366954.jpg?t=st=1711006878~exp=1711010478~hmac=d15d0f2849ad7cd9155cc3f3cc4464622369a5416bd10f97c5c2277a37d135b0&w=740')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
