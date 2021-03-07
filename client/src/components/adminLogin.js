import React from "react";
import { Link } from "react-router-dom";

export default function adminLogin() {
  return (
    <div className="container login-box">
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <button type="submit">Admin Login</button>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <Link to="/" className="link-class">Home</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
