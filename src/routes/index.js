import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import NotFound from "../pages/NotFound/NotFound";
import DashBoard from "../pages/DashBoard";
import MyProfile from "../pages/myprofile";

export default () => {
  return (
    <Routes>
      {/* <Route path="/" exact element={} /> */}
      <Route path="*" exact element={<NotFound />} />
      <Route path="/" exact element={<Login />} />
      <Route path="/dashboard" exact element={<DashBoard />} />
      <Route path="/myprofile" exact element={<MyProfile />} />
    </Routes>
  );
};
