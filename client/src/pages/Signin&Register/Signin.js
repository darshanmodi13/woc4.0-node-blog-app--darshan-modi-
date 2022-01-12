import React, { useState } from "react";

import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import SigninNavBar from "../../components/Navbar/SigninNavBar";

//css
import styles from "./Signin.module.css";

const components = {
  1: Login,
  2: Register,
};

const Signin = () => {
  let [pageNo, setPageNo] = useState(1);
  let Page = components[pageNo];
  return (
    <>
      <SigninNavBar />
      <div className={`${styles.formContainer}`}>
        <div
          className="row mt-3 ml-3"
          style={{
            fontSize: "20px",
          }}
        >
          <div
            className={`col-2 ${styles.signin}`}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setPageNo(1);
            }}
          >
            Sign in
          </div>
          <div className="col-1"></div>
          <div
            className={`col-2 ${styles.signin}`}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setPageNo(2);
            }}
          >
            Sign up
          </div>
          <div className="col-7"></div>
        </div>
        <div className={`ml-3 mt-5`}>
          <Page />
        </div>
      </div>
    </>
  );
};

export default Signin;
