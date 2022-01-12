import React from "react";
import { Link } from "react-router-dom";

const SigninNavBar = () => {
  return (
    <>
      <nav className="ml-2 navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Bloggr.com
        </Link>
      </nav>
    </>
  );
};

export default SigninNavBar;
