import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import UploadBlogComponent from "../../components/UploadBlog/UploadBlogComponent";

const Upload = () => {
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
          <UploadBlogComponent />
        </div>
      </div>
    </>
  );
};

export default Upload;
