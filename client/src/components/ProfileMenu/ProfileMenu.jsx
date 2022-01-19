import React from "react";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ background: "var(--button)", color: "#fff" }}
        >
          <i class="fa fa-plus-square"></i>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link className="dropdown-item" to="/update-profile">
            Update Profile
          </Link>
          <Link className="dropdown-item" to="/upload">
            Upload
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
