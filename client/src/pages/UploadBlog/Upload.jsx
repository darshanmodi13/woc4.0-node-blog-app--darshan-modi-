import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../../components/Navbar/Navbar";
import UploadBlogComponent from "../../components/UploadBlog/UploadBlogComponent";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Upload = () => {
  let query = useQuery();
  let post_id = query.get("post_id");
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
          <UploadBlogComponent post_id={post_id} />
        </div>
      </div>
    </>
  );
};

export default Upload;
