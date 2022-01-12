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

const isLogin = Cookies.get("token") ? true : false;

const App = () => {
  return (
    <>
      <div className="page-container">
        <Switch>
          <PrivateRoute component={Home} isLogin={isLogin} path="/" exact />
          <PrivateRoute
            component={Profile}
            isLogin={isLogin}
            path="/profile"
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
