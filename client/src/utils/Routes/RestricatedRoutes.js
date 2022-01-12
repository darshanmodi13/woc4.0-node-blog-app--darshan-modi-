import React from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const RestricatedRoutes = ({ component: Component, ...rest }) => {
  let history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.isLogin ? history.goBack() : <Component {...props} />
      }
    />
  );
};

export default RestricatedRoutes;
