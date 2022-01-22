import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import url from "../../utils/url";
const BlogPage = ({ user_data }) => {
  const location = useHistory();
  return (
    <>
      <div className="mt-4 ml-2">
        <div style={{ textAlign: "center", width: "100%" }}>
          <h2>
            <b>{user_data.heading}</b>
          </h2>
          <img
            style={{ width: "70%", height: "50%" }}
            src={`${url}/public/${user_data.blog_pic}`}
            alt="blog"
            className="mt-4"
          />
        </div>
        <div className={`mt-4 ml-2`}>
          <h5>
            <b>{user_data.sub_heading}</b>
          </h5>
        </div>
        <div className={`mt-2 ml-2`} style={{ fontSize: "0.8rem" }}>
          <p>{user_data.content}</p>
        </div>
        <div>
          <p className="ml-2">
            <span style={{ float: "left" }}>
              {`${new Date(user_data.date).getDate()}-${
                new Date(user_data.date).getMonth() + 1
              }-${new Date(user_data.date).getFullYear()}`}
            </span>
            <span style={{ float: "right" }}>
              Blog By{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  location.push(`/profile/${user_data._id}`);
                }}
              >
                @{user_data.user_name}
              </span>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
