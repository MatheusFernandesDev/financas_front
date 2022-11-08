import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/login"; 

export default () => {
  return (
    <Routes>
      {/* <Route path="/" exact element={} /> */}
      <Route path="/login" exact element={<Login/>} />
    </Routes>
  );
};