import Cookies from "js-cookie";
import React from "react";
import { Switch } from "react-router-dom";

//css
import "./App.css";

//Route Types
import PrivateRoute from "./utils/Routes/PrivateRoute";
import RestricatedRoutes from "./utils/Routes/RestricatedRoutes";

//Routes components
import Home from "./pages/Home/Home";
import Signin from "./pages/Signin&Register/Signin";
import Profile from "./pages/Profile/Profile";
import ViewBlog from "./pages/ViewBlog/ViewBlog";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import Upload from "./pages/UploadBlog/Upload";

const isLogin = Cookies.get("token") ? true : false;

const App = () => {
  return (
    <>
      <div className="page-container">
        <Switch>
          <PrivateRoute component={Home} isLogin={isLogin} path="/" exact />
          <PrivateRoute
            component={ViewBlog}
            isLogin={isLogin}
            path="/blog/view/:post_id"
            exact
          />
          <PrivateRoute
            component={Profile}
            isLogin={isLogin}
            path="/profile/:id"
            exact
          />
          <PrivateRoute
            component={UpdateProfile}
            isLogin={isLogin}
            path="/update-profile"
            exact
          />
          <PrivateRoute
            component={Upload}
            isLogin={isLogin}
            path="/upload"
            exact
          />
          <RestricatedRoutes
            component={Signin}
            isLogin={isLogin}
            path="/signin"
            exact
          />
        </Switch>
      </div>
    </>
  );
};

export default App;
