import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import url from "../../utils/url";

const UpdateDeleteMenu = ({ post_id }) => {
  let deletePost = async () => {
    let ans = await window.confirm("Do You Want to Delete Post ? ");
    if (ans) {
      await axios.delete(`${url}/api/user/post/${post_id}`, {
        withCredentials: true,
      });
    }
  };
  return (
    <>
      <div className="dropdown" style={{ fontSize: "12px" }}>
        <button
          className="btn ml-5"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{
            background: "none",
            color: "--var(--button)",
          }}
        >
          <i className="fa fa-ellipsis-v"></i>
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
          style={{ fontSize: "12px" }}
        >
          <Link className="dropdown-item" to={`/upload?post_id=${post_id}`}>
            Update Post
          </Link>
          <p className="dropdown-item" onClick={deletePost}>
            Delete Post
          </p>
        </div>
      </div>
    </>
  );
};

export default UpdateDeleteMenu;
