import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../../utils/url";
import Cookies from "js-cookie";

import styles from "./style.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const user_id = Cookies.get("user_id");
const UploadBlogComponent = ({ post_id }) => {
  const [img, setImg] = useState();
  const [imgBuffer, setImgBuffer] = useState();
  const location = useHistory();
  const [data, setData] = useState({
    header: "",
    sub_header: "",
    category: "",
    content: "",
  });
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getData();
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let uploadImg = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
    getBase64(e.target.files[0], (result) => {
      setImgBuffer(result);
    });
  };
  let getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => cb(reader.result);
    reader.onerror = () => console.log("Erorr");
  };
  let getData = async () => {
    if (post_id) {
      let res = await axios.get(`${url}/api/user/post/${post_id}`, {
        withCredentials: true,
      });

      setData({
        header: res.data.data.post.heading,
        sub_header: res.data.data.post.sub_heading,
        content: res.data.data.post.content,
        category: res.data.data.post.category_id,
      });
      setImg(`${url}/public/${res.data.data.post.blog_pic}`);
    }
  };
  let inputChange = (e) => {
    setData((oldData) => {
      return {
        ...oldData,
        [e.target.name]: e.target.value,
      };
    });
  };
  let getCategories = async () => {
    let res = await axios.get(`${url}/api/category/list`, {
      withCredentials: true,
    });
    setCategory(res.data.data);
  };
  let uploadData = async () => {
    let res = await axios.post(
      `${url}/api/user/upload`,
      {
        data,
        imgBuffer,
      },
      { withCredentials: true }
    );
    if (res.status === 200) {
      location.push(`/profile/${user_id}`);
    }
  };
  return (
    <>
      {category.length === 0 ? null : (
        <>
          <div className="row mt-2 ml-2">
            <div className={`${styles.imgContainer}`}>
              {img ? (
                <img src={img} alt="pic" className={`${styles.img}`} />
              ) : (
                <>
                  <div
                    className="ml-5"
                    style={{
                      height: "45vh",
                      width: "80%",
                      border: "1px solid grey",
                      textAlign: "center",
                    }}
                  >
                    Upload Your Blog Image
                  </div>
                </>
              )}
            </div>
            <div style={{ textAlign: "center" }}>
              <div className={`file btn btn-lg btn-primary ${styles.div}`}>
                Upload Image
                <input
                  type="file"
                  name="file"
                  className={`${styles.input}`}
                  onChange={uploadImg}
                />
              </div>
            </div>
          </div>
          <div className="mt-2">
            <label className={`${styles.label}`}>Heading</label>
            <br />
            <div className={`${styles.inputContainer}`}>
              <input
                type="text"
                className={`${styles.txt}`}
                maxLength={50}
                value={data.header}
                name="header"
                onChange={inputChange}
              />
              <span>{data.header.length}/50</span>
            </div>
          </div>
          <div className="mt-2">
            <label className={`${styles.label}`}>Sub Heading</label>
            <br />
            <div className={`${styles.inputContainer}`}>
              <input
                type="text"
                className={`${styles.txt}`}
                maxLength={120}
                value={data.sub_header}
                name="sub_header"
                onChange={inputChange}
              />
              <span>{data.sub_header.length}/120</span>
            </div>
          </div>
          <div className="mt-2">
            <label className={`${styles.label}`}>Category</label>
            <br />
            <div className={`${styles.inputContainer}`}>
              <select
                style={{
                  outline: "none",
                  border: "none",
                  width: "100%",
                  padding: "7px",
                }}
                name="category"
                defaultValue={data.category}
                onChange={inputChange}
              >
                <option value="">---Select---</option>
                {category.map((c, index) => {
                  return (
                    <option key={index} value={c._id}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="mt-2">
            <label className={`${styles.label}`}>Content</label>
            <br />
            <div className={`${styles.inputContainer}`}>
              <textarea
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  paddingLeft: "15px",
                  paddingTop: "5px",
                  paddingRight: "15px",
                  resize: "none",
                  height: "20vh",
                }}
                name="content"
                value={data.content}
                onChange={inputChange}
              ></textarea>
              <span></span>
            </div>
          </div>
          <div className="mt-2 mb-5" style={{ textAlign: "center" }}>
            <button style={{ padding: "10px" }} onClick={uploadData}>
              Upload
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default UploadBlogComponent;
