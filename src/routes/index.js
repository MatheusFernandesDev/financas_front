import React from "react";
import { Routes, Route } from "react-router-dom";
import Private from "./RouteWrapper";

import Login from "../pages/login";
import NotFound from "../pages/NotFound/NotFound";
import DashBoard from "../pages/dashBoard";
import MyProfile from "../pages/myprofile";

export default () => {
  return (
    <Routes>
      <Route path="*" exact element={<NotFound />} />
      <Route path="/" exact element={<Login />} />
      <Route
        path="/dashboard"
        exact
        element={<Private Component={DashBoard} />}
      />
      <Route
        path="/myprofile"
        exact
        element={<Private Component={MyProfile} />}
      />
    </Routes>
  );
};
