import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

import styles from "./Login.module.css";

const Login = () => {
  const [user, setUser] = useState({
    user_name: "",
    password: "",
  });

  let changeInput = (e) => {
    setUser((oldData) => {
      return {
        ...oldData,
        [e.target.id.slice(1)]: e.target.value,
      };
    });
  };

  const submitForm = async () => {
    let res = await axios.post(
      "https://woc4-darshan-modi.herokuapp.com/api/auth/signin",
      {
        ...user,
      }
    );

    if (res.status === 200) {
      Cookies.set("token", res.data.data.token, { expires: 1 });
      Cookies.set("user_id", res.data.data._id, { expires: 1 });
      window.location.href = "/";
    }
  };
  return (
    <>
      <div className={`${styles.loginForm}`}>
        <div className="ml-5">
          <label htmlFor="username" className={`${styles.label}`}>
            Username
          </label>
          <br />
          <input
            type="text"
            id="#user_name"
            className={`username ${styles.input}`}
            value={user.user_name}
            onChange={changeInput}
          />
        </div>
        <div className="ml-5">
          <label htmlFor="password" className={`${styles.label}`}>
            Password
          </label>
          <br />
          <input
            type="password"
            id="#password"
            className={`${styles.input} password`}
            value={user.password}
            onChange={changeInput}
          />
        </div>
        <br />
        <div className="ml-5">
          <button
            className={`${styles.input}`}
            style={{ paddingTop: "5px", paddingBottom: "5px" }}
            onClick={submitForm}
          >
            Sign in
          </button>
        </div>
        <br />
        <div className="ml-5" style={{ fontSize: "12px" }}>
          Forgot Password ?{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            Click Here
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
