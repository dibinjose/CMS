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
      <Header />
      <div className="section-margin">
        <center>
          <Link to="/signup" class="link-class">
            SignUp
          </Link>
          <Link to="/signin" class="link-class">
            SignIn
          </Link>
        </center>
      </div>
      <Footer />
    </>
  );
  }
}
