/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

//Component
import Navbar from "../../components/Navbar/Navbar";
import BlogPage from "../../components/BlogPage/BlogPage";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import url from "../../utils/url";

const ViewBlog = () => {
  const params = useParams();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await axios.get(`${url}/api/user/post/${params.post_id}`, {
      withCredentials: true,
    });
    setUserData(() => {
      return {
        ...res.data.data.post,
        ...res.data.data.uploader_id,
      };
    });
  };
  return (
    <>
      {Object.keys(userData).length !== 0 ? (
        <>
          <div className="row ml-5 mb-5">
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
              <BlogPage user_data={userData} />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ViewBlog;
