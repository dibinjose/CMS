import React from "react";

export default function Header(props) {
    const headingTitle = props.headingTitle;
  return (
    <div>
      <h1>A Simple Ecommerce Website Created Using MERN Stack</h1>
      <center>
        <i className="fab fa-x fa-react fa-spin fa-5x"></i>
        <h2>
            { headingTitle }
        </h2>
      </center>
      
    </div>
  );
}
