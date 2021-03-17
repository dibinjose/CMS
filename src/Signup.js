import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Signup() {
  return (
    <>
      <Header />
      <div className="section-margin container login-box">
        <form>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
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
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Upload a Profile Picture (optional)
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div className="header-row">
            <button type="submit">SignUp</button>
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
