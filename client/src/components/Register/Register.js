import React, { useState } from "react";

import styles from "./Register.module.css";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    username: "",
    website: "",
    bio: "",
  });

  let changeInput = (e) => {
    setUser((oldData) => {
      return {
        ...oldData,
        [e.target.id.slice(1)]: e.target.value,
      };
    });
  };
  return (
    <>
      <div className="ml-5 mb-5">
        <div>
          <label htmlFor="email" className={`${styles.label}`}>
            Email
          </label>
          <br />
          <input
            type="text"
            id="#email"
            className={`${styles.input}`}
            value={user.email}
            onChange={changeInput}
          />
        </div>
        <div className="row">
          <div className="col-4">
            <label htmlFor="first_name" className={`${styles.label}`}>
              First Name
            </label>
            <br />
            <input
              type="text"
              id="#first_name"
              style={{ width: "100%" }}
              value={user.first_name}
              onChange={changeInput}
            />
          </div>
          <div className="col-4 ml-4">
            <label htmlFor="last_name" className={`${styles.label}`}>
              Last Name
            </label>
            <br />
            <input
              type="text"
              id="#last_name"
              style={{ width: "100%" }}
              value={user.last_name}
              onChange={changeInput}
            />
          </div>
        </div>
        <div>
          <label htmlFor="username" className={`${styles.label}`}>
            Username
          </label>
          <br />
          <input
            type="text"
            id="#username"
            className={`${styles.input}`}
            value={user.username}
            onChange={changeInput}
          />
        </div>
        <div>
          <label htmlFor="password" className={`${styles.label}`}>
            Password
          </label>
          <br />
          <input
            type="password"
            id="#password"
            className={`${styles.input}`}
            value={user.password}
            onChange={changeInput}
          />
        </div>
        <div>
          <label htmlFor="website" className={`${styles.label}`}>
            Website Link
          </label>
          <br />
          <input
            type="text"
            id="#website"
            className={`${styles.input}`}
            value={user.website}
            onChange={changeInput}
          />
        </div>
        <div>
          <label htmlFor="bio" className={`${styles.label}`}>
            Bio
          </label>
          <br />
          <textarea
            id="#bio"
            style={{
              height: "50px",
              width: "70%",
              paddingLeft: "10px",
              resize: "false",
            }}
          ></textarea>
        </div>
        <br />
        <div>
          <button
            className={`${styles.input}`}
            style={{ paddingTop: "5px", paddingBottom: "5px" }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
