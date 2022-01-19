/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import url from "../../utils/url";
import axios from "axios";
import Cookies from "js-cookie";
//css
import styles from "./ProfileCard.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import FollowBtn from "../FollowBtn/FollowBtn";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

const user_id = Cookies.get("user_id");

const ProfileCard = () => {
  const [isUser, setIsUser] = useState(true);
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const params = useParams();
  useEffect(() => {
    getUser();
    setIsUser(params.id === user_id);
  }, [params.id]);

  const getUser = async () => {
    let res = await axios.get(`${url}/api/user/${params.id}`, {
      withCredentials: true,
    });
    setUser(res.data.data.user);
    setPosts(res.data.data.posts);
  };

  return (
    <>
      {user ? (
        <>
          <div className="row">
            <div className={`${styles.username} col-2`}>@john_dev</div>
            <div className="col-6"></div>
            <div className={`col-3 ${styles.add}`}>
              <p style={{ textAlign: "right" }}>
                {isUser ? <ProfileMenu /> : <FollowBtn />}
              </p>
            </div>
          </div>
          <div className={`${styles.profileContainer} mt-2`}>
            <div className="row">
              <div className="col-3">
                <img
                  src="https://picsum.photos/id/1001/200/300"
                  alt="profile"
                  className={`${styles.img}`}
                />
              </div>
              <div
                className={`col-3 ${styles.profileDataContainer}`}
                style={{ textAlign: "center" }}
              >
                <p>{posts.length}</p>
                <p>Blogs</p>
              </div>
              <div
                className={`col-3 ${styles.profileDataContainer}`}
                style={{ textAlign: "center" }}
              >
                <p>{user.followers.length}</p>
                <p>Followers</p>
              </div>
              <div
                className={`col-3 ${styles.profileDataContainer}`}
                style={{ textAlign: "center" }}
              >
                <p>{user.following.length}</p>
                <p>Following</p>
              </div>
            </div>
            <div className="ml-2 mt-4">
              <p className={`${styles.bio}`}>{user.bio}</p>
            </div>
            <Link
              to={{ pathname: "https://www.google.com/" }}
              target="_blank"
              className={`ml-2 ${styles.website}`}
              style={{ textDecoration: "none" }}
            >
              {user.website}
            </Link>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ProfileCard;
