import React from "react";

//Component
import Navbar from "../../components/Navbar/Navbar";
import BlogPage from "../../components/BlogPage/BlogPage";

const ViewBlog = () => {
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
        <div className="col-10">
          <BlogPage />
        </div>
      </div>
    </>
  );
};

export default ViewBlog;
