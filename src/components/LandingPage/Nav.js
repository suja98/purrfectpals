import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import DarkTheme from "./DarkTheme";

import { FaBars, FaTimes, FaRegUserCircle } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import "../../styles/Nav.css";

function Navbar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
    const handleResize = () => {
      navRef.current.classList.add("notransition");

      setTimeout(() => {
        navRef.current.classList.remove("notransition");
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <h1 className="text-3xl font-bold leading-none md:text-3xl">
        <Link to="/">PURRFECTPALS</Link>
      </h1>

      <div className="flex gap-3 darkTheme">
        <nav ref={navRef}>
          <ul style={{ display: "flex" }}>
            <li className="dropdown">
              <button className="dropbtn">Adopt</button>
              <div className="dropdownContent">
                <ul>
                  <Link to="/available-dogs">
                    <li>Adopt a Dog</li>
                  </Link>
                  <Link to="/adoption-procedure">
                    <li>Adoption Procedure</li>
                  </Link>
                  <Link to="/faq">
                    <li>
                      FAQ<span className="lowercase">s</span>
                    </li>
                  </Link>
                  <Link to="/adoption-form">
                    <li>Adoption Form</li>
                  </Link>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <button className="dropbtn">Volunteer</button>
              <div className="dropdownContent">
                <ul>
                  <Link to="/foster-care-application">
                    <li>Become a Foster</li>
                  </Link>
                  <Link to="/join-our-team">
                    <li>Join Our Team</li>
                  </Link>
                </ul>
              </div>
            </li>
            <li className="dropdown">
              <button className="dropbtn">Contact Us</button>
              <div className="dropdownContent">
                <ul>
                  <Link to="/rehome">
                    <li>Rehome your dog</li>
                  </Link>
                  <Link to="/cruelty-report">
                    <li>Report cruelty</li>
                  </Link>
                  <Link to="/contact">
                    <li>Contact</li>
                  </Link>
                </ul>
              </div>
            </li>
            <li className="highlightBtnContainer">
              <Link to="/donate">
                <button
                  className="highlightBtn"
                  style={{
                    backgroundColor: "var(--white-text)",
                    color: "var(--main-text)",
                  }}
                >
                  Donate
                  <BiDonateHeart />
                </button>
              </Link>
              <Link to="/login">
                <button className="highlightBtn">
                  Login
                  <FaRegUserCircle />
                </button>
              </Link>
            </li>
          </ul>
        </nav>
        <DarkTheme />
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;
