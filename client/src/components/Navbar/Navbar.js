import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

//css
import styles from "./Navbar.module.css";
import url from "../../utils/url";

const user_id = Cookies.get("user_id");
const Navbar = () => {
  let [users, setUsers] = useState([]);
  let [text, setText] = useState("");
  let search = async (e) => {
    setText(e.target.value);

    let res = await axios.get(
      `${url}/api/user/list?limit=5&username=${e.target.value}`,
      {
        withCredentials: true,
      }
    );
    setUsers(res.data.data);
  };
  return (
    <>
      <nav>
        <div className={`${styles.logo}`}>Bloggr.com</div>
        <div className="mt-5 ml-4">
          <ul className={`navbar-nav ${styles.ul}`}>
            <li className={`nav-item ${styles.li}`}>
              <Link to="/" className={`${styles.link} mt-3`}>
                Home
              </Link>
            </li>

            <li className={`navbar-nav ${styles.li} mt-3`}>
              <Link to="/blog" className={`${styles.link}`}>
                Blog
              </Link>
            </li>
            <li className={`navbar-nav ${styles.li} mt-3`}>
              <div
                className={`${styles.link} nav-link dropdown-toggle`}
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Category
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/pages" className={`${styles.link}`}>
                  Sports
                </Link>
                <br />
                <Link to="/pages" className={`${styles.link}`}>
                  Wildlife
                </Link>
              </div>
            </li>
            {/* <li className={`navbar-nav ${styles.li} mt-3`}>
              <Link to="/chat" className={`${styles.link}`}>
                Chat
              </Link>
            </li> */}
            <li className={`navbar-nav ${styles.li} mt-3`}>
              <Link to={`/profile/${user_id}`} className={`${styles.link}`}>
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <input
            type={"text"}
            style={{ width: "175px" }}
            placeholder="Search Blogger..."
            onChange={search}
            value={text}
          />
          <ul
            style={{
              listStyle: "none",
              marginTop: "1%",
              width: "100%",
              marginLeft: "-2%",
            }}
          >
            {users.map((u, index) => {
              return <List key={index} user={u} />;
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const List = (props) => {
  return (
    <>
      <li
        style={{
          width: "100%",
          padding: "10px",
        }}
      >
        <Link
          to={`/profile/${props.user._id}`}
          style={{ textDecoration: "none" }}
        >
          {props.user.user_name}
        </Link>
      </li>
    </>
  );
};
