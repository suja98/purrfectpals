import React from "react";
import Nav from "../components/LandingPage/Nav";
import Footer from "../components/Body/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
