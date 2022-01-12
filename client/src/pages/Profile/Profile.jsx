import React from "react";

//Component
import Navbar from "../../components/Navbar/Navbar";
import Blog from "../../components/Blogs/Blog";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

//Style

const Profile = () => {
  return (
    <>
      <div className="row ml-5">
        <div
          className="col-2"
          style={{
            borderRight: "0.01em solid #565050",
            height: "100%",
          }}
        >
          <div className="mt-4" style={{ position: "fixed", width: "100%" }}>
            <Navbar />
          </div>
        </div>
        <div className="col-10 mt-4">
          <ProfileCard />
          <hr style={{ margin: "auto", width: "70%" }} className="mt-3" />
          <div className="grid-container mt-4">
            <div className="item">
              <Blog />
            </div>
            <div className="item">
              <Blog />
            </div>
            <div className="item">
              <Blog />
            </div>
            <div className="item">
              <Blog />
            </div>
            <div className="item">
              <Blog />
            </div>
            <div className="item">
              <Blog />
            </div>
            <div className="item">
              <Blog />
            </div>
            <div className="item">
              <Blog />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
