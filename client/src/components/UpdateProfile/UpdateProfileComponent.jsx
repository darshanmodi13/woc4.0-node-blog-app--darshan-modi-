import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

//css
import styles from "./style.module.css";

const UpdateProfileComponent = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    website: "",
    bio: "",
  });
  useEffect(() => {
    getData();
  }, []);
  let getData = async () => {
    let id = Cookies.get("user_id");
    let data = await axios.get(`http://localhost:8080/api/user/${id}`, {
      withCredentials: true,
    });
    let res = data.data.data;
    //console.log(res);
    setUser(() => {
      return {
        first_name: res.first_name,
        last_name: res.last_name,
        user_name: res.user_name,
        bio: res.bio,
        website: res.website,
      };
    });
  };
  let changeInput = (e) => {
    setUser((oldData) => {
      return {
        ...oldData,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <>
      <div className="mt-2 ml-2">
        <div className={`row ${styles.imgContainer}`}>
          <div className="col-12">
            <img
              src="https://picsum.photos/200/300"
              alt="profile"
              className={`${styles.img}`}
            />
          </div>
        </div>
        <div className="row mt-3 ml-2">
          <div className="col-5">
            <label htmlFor="first_name" className={`${styles.label}`}>
              First Name
            </label>
            <br />
            <input
              type="text"
              id="#first_name"
              name="first_name"
              className="first_name"
              style={{ width: "100%" }}
              value={user.first_name}
              onChange={changeInput}
            />
          </div>
          <div className="col-5 ml-4">
            <label htmlFor="last_name" className={`${styles.label}`}>
              Last Name
            </label>
            <br />
            <input
              type="text"
              id="#last_name"
              style={{ width: "100%" }}
              value={user.last_name}
              onChange={changeInput}
              name="last_name"
              className="last_name"
            />
          </div>
        </div>
        <div className="row mt-3 ml-2">
          <div className="col-10">
            <label htmlFor="username" className={`${styles.label}`}>
              Username
            </label>
            <br />
            <input
              type="text"
              id="#username"
              name="user_name"
              style={{ width: "100%" }}
              value={user.user_name}
              onChange={changeInput}
              className="username"
            />
          </div>
        </div>
        <div className="row mt-3 ml-2">
          <div className="col-10">
            <label htmlFor="website" className={`${styles.label}`}>
              Website Link
            </label>
            <br />
            <input
              type="text"
              id="#website"
              name="website"
              style={{ width: "100%" }}
              value={user.website}
              onChange={changeInput}
              className="website"
            />
          </div>
        </div>
        <div className="row mt-3 ml-2">
          <div className="col-10">
            <label htmlFor="bio" className={`${styles.label}`}>
              Bio
            </label>
            <br />
            <textarea
              id="#bio"
              name="bio"
              className="bio"
              style={{
                height: "80px",
                width: "100%",
                paddingLeft: "10px",
                resize: "false",
              }}
              value={user.bio}
              onChange={changeInput}
            ></textarea>
          </div>
          <div
            className="mt-2"
            style={{ textAlign: "center", marginBottom: "5%" }}
          >
            <button style={{ padding: "12px" }}>Update Profile</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileComponent;
