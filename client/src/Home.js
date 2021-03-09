import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {

  const isLoggedIn = false;
  if (isLoggedIn) {
    return (
      <>
      </>
    );
  }
  else {
  return (
    <>
      <Header headingTitle = "Home Page" />
      <div className="section-margin">
        <center>
          <Link to="/userLogin" class="link-class">
            User Login
          </Link>
          <Link to="/adminLogin" class="link-class">
            Admin Login
          </Link>
        </center>
      </div>
      <Footer />
    </>
  );
  }
}
