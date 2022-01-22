/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import url from "../../utils/url";
import axios from "axios";

//Component
import Navbar from "../../components/Navbar/Navbar";
import Blog from "../../components/Blogs/Blog";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

//Style

const Profile = () => {
  const [userData, setUserData] = useState({});
  let params = useParams();
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    let res = await axios.get(`${url}/api/user/${params.id}`, {
      withCredentials: true,
    });
    setUserData(res.data.data);
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
            <div className="col-10 mt-4">
              <ProfileCard user_data={userData} />
              <hr style={{ margin: "auto", width: "70%" }} className="mt-3" />
              <div className="grid-container mt-4">
                {userData.posts.map((post, index) => {
                  return (
                    <BlogContainer
                      key={index}
                      post={post}
                      user={userData.user}
                      isUser={userData.user._id === params.id}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Profile;

const BlogContainer = (props) => {
  return (
    <>
      <div className="item">
        <Blog post={props.post} user={props.user} isUser={props.isUser} />
      </div>
    </>
  );
};
