import React from "react";

//component
import Blog from "../Blogs/Blog";

const HomeComponent = () => {
  return (
    <>
      <div className="mt-4">
        <div className="grid-container" style={{ width: "97%" }}>
          <div className={`item`}>
            <Blog />
          </div>
          <div className={`item`}>
            <Blog />
          </div>
          <div className={`item`}>
            <Blog />
          </div>
          <div className={`item`}>
            <Blog />
          </div>
          <div className={`item`}>
            <Blog />
          </div>
          <div className={`item`}>
            <Blog />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
