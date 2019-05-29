import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link> <br></br>
      <Link to="/login">Login</Link>
    </>
  );
}

export default Navbar;
