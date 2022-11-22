import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import NotFound from "../pages/NotFound/NotFound";
import DashBoard from "../pages/dashBoard";

export default () => {
  return (
    <Routes>
      {/* <Route path="/" exact element={} /> */}
      <Route path="/" exact element={<Login />} />
      <Route path="/dashboard" exact element={<DashBoard />} />
      <Route path="*" exact element={<NotFound />} />
    </Routes>
  );
};
