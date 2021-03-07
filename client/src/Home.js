import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <center>
      <Link to="/userLogin" class="link-class">
        User Login
      </Link>
      <Link to="/adminLogin" class="link-class">
        Admin Login
      </Link>
    </center>
  );
}
