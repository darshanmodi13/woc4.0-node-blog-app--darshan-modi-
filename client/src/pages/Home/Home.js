import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import HomeComponent from "../../components/HomeComponent/HomeComponent";

const Home = () => {
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
          <HomeComponent />
        </div>
      </div>
    </>
  );
};

export default Home;
