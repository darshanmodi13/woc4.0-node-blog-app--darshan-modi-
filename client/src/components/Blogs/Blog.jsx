import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UpdateDeleteMenu from "../UpdateAndDelete/UpdateDeleteMenu";
//css
import styles from "./Blog.module.css";
import url from "../../utils/url";
import axios from "axios";

const Blog = ({ post, user, isUser }) => {
  let location = useHistory();

  let gotoBlog = (id) => {
    location.push(`/blog/view/${id}`);
  };

  let followbtnClick = async (e) => {
    if (e.target.innerHTML === "Follow") {
      await axios.put(
        `${url}/api/user/follow`,
        { user },
        { withCredentials: true }
      );
      e.target.innerHTML = "Following";
    } else {
      await axios.put(
        `${url}/api/user/unfollow`,
        { user },
        { withCredentials: true }
      );
      e.target.innerHTML = "Follow";
    }
  };
  return (
    <>
      <div className="card">
        <div className="row ml-1 mt-1 mb-1">
          <div
            className={`col-4 ${styles.username}`}
            onClick={() => {
              location.push(`/profile/${user._id}`);
            }}
          >
            @{user.user_name}
          </div>
          <div className="col-3"></div>

          <div
            className="col-5"
            style={{ textAlign: "center", fontSize: "11px" }}
          >
            {!isUser ? (
              <button
                className="followbtn"
                style={{ padding: "5px", textTransform: "capitalize" }}
                onClick={followbtnClick}
              >
                {user.followers.length !== 0 ? "Following" : "Follow"}
              </button>
            ) : (
              <UpdateDeleteMenu post_id={post._id} />
            )}
          </div>
        </div>
        <img
          alt="abc"
          src={`${url}/public/${post.blog_pic}`}
          style={{ height: "350px" }}
          onClick={() => {
            gotoBlog(post._id);
          }}
        />
        <div className="card-body">
          <p
            className={`card-title ${styles.header}`}
            onClick={() => {
              gotoBlog(post._id);
            }}
          >
            {post.heading}
          </p>
          <p
            className={`card-text ${styles.cardText} ${styles.wrap}`}
            onClick={() => {
              gotoBlog(post._id);
            }}
          >
            {post.sub_heading}
          </p>
          <div className="row">
            <div className={`col-4 ${styles.date}`}>{`${new Date(
              post.date
            ).getDate()}-${new Date(post.date).getMonth() + 1}-${new Date(
              post.date
            ).getFullYear()}`}</div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
