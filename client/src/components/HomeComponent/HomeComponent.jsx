import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../../utils/url";
import Cookies from "js-cookie";

//component
import Blog from "../Blogs/Blog";

const user_id = Cookies.get("user_id");
const HomeComponent = () => {
  const [userData, setUserData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [yScroll, setYScroll] = useState(0);
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

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
      <div className="mt-4">
        <div className="grid-container" style={{ width: "97%" }}>
          {userData.map((user, index) => {
            if (user.uploader_id.following[0].id === user_id)
              return <BlogContainer user={user} key={index} />;
            return null;
          })}
        </div>
      </div>
    </>
  );
};

export default HomeComponent;

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
