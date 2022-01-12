import React from "react";
import { Link } from "react-router-dom";

//css
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <>
      <div className="row">
        <div className={`${styles.username} col-2`}>@john_dev</div>
        <div className="col-6"></div>
        <div className={`col-3 ${styles.add}`}>
          <p>New Blog</p>
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
            <p>10</p>
            <p>Blogs</p>
          </div>
          <div
            className={`col-3 ${styles.profileDataContainer}`}
            style={{ textAlign: "center" }}
          >
            <p>10</p>
            <p>Followers</p>
          </div>
          <div
            className={`col-3 ${styles.profileDataContainer}`}
            style={{ textAlign: "center" }}
          >
            <p>10</p>
            <p>Following</p>
          </div>
        </div>
        <div className="ml-2 mt-4">
          <p className={`${styles.bio}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
            tristique erat. Nullam nisl mi, feugiat sed eros sit amet, facilisis
            malesuada nisl. Morbi ac ipsum mi. Suspendisse viverra mauris ut
            felis porta facilisis. Quisque varius justo eu ante tristique, ac
            lobortis arcu sollicitudin. Aliquam vehicula orci ut mauris lobortis
            bibendum. Vivamus eleifend pulvinar felis id imperdiet.
          </p>
        </div>
        <Link
          to={{ pathname: "https://www.google.com/" }}
          target="_blank"
          className={`ml-2 ${styles.website}`}
          style={{ textDecoration: "none" }}
        >
          WebSite
        </Link>
      </div>
    </>
  );
};

export default ProfileCard;
