import React from "react";
import { Link } from "react-router-dom";

//css
import styles from "./Navbar.module.css";

const Navbar = () => {
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
              <Link to="/profile" className={`${styles.link}`}>
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
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
