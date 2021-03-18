import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Signin() {
  return (
    <>
      <Header />
      <div className="section-margin container login-box">
        <form>
          <div class="mb-3">
            <input
              class="form-control"
              type="text"
              placeholder="username"
              aria-label="default input example"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="password"
            />
          </div>
          <div className="header-row">
            <button type="submit">SignIn</button>
            <Link to="/" class="link-class">
              Back To Home
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
