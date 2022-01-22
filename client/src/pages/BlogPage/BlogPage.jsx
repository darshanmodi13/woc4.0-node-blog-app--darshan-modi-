import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../../utils/url";
import Cookies from "js-cookie";

import Navbar from "../../components/Navbar/Navbar";
import Blog from "../../components/Blogs/Blog";

import { useQuery } from "../../utils/Hooks/useQuery";

const user_id = Cookies.get("user_id");
const BlogPage = () => {
  const [userData, setUserData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [yScroll, setYScroll] = useState(0);
  const query = useQuery();
  const category_id = query.get("category_id") || null;
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category_id, offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  let handleScroll = () => {
    if (window.pageYOffset > yScroll) {
      setYScroll(window.pageYOffset);
      setOffset(Math.floor(window.pageYOffset / 400));
    }
  };
  let getData = async () => {
    let link = `${url}/api/user/post/list?limit=20&offset=${offset}`;
    let res = await axios.get(`${link}`, {
      withCredentials: true,
    });
    setUserData((oldData) => {
      return [...oldData, ...res.data.data];
    });
  };
  return (
    <>
      {Object.keys(userData).length !== 0 ? (
        <>
          <div className="row ml-5">
            <div
              className="col-2"
              style={{
                borderRight: "0.01em solid #565050",
                height: "100%",
              }}
            >
              <div
                className="mt-4"
                style={{ position: "fixed", width: "100%" }}
              >
                <Navbar />
              </div>
            </div>
            <div className="col-10">
              <div className="mt-4">
                <div className="grid-container" style={{ width: "97%" }}>
                  {userData.map((user, index) => {
                    if (category_id === null)
                      return <BlogContainer user={user} key={index} />;
                    else if (
                      category_id &&
                      category_id === user.category_id._id
                    )
                      return <BlogContainer user={user} key={index} />;
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default BlogPage;
const BlogContainer = (props) => {
  let { uploader_id, ...post } = props.user;
  return (
    <>
      <div className="item">
        <Blog
          isUser={uploader_id._id === user_id}
          post={post}
          user={uploader_id}
        />
      </div>
    </>
  );
};
