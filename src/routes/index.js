import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Private from "./RouteWrapper";

import Login from "../pages/login";
import NotFound from "../pages/NotFound/NotFound";
import DashBoard from "../pages/dashBoard";
import MyProfile from "../pages/myprofile";
import Users from "../pages/users";
import BalanceMovement from "../pages/finances/balanceMovement";
import ExpenseMovement from "../pages/finances/expenseMovement";
import RevenueMovement from "../pages/finances/revenueMovement";
import Bank from "../pages/bank";
import Category from "../pages/category";

export default () => {
  return (
    <Routes>
      <Route path="*" exact element={<NotFound />} />
      <Route path="/" exact element={<Private defaultC Component={Login} />} />
      <Route
        path="/dashboard"
        exact
        element={<Private Component={DashBoard} />}
      />
      <Route
        path="/balanceMovement"
        exact
        element={<Private Component={BalanceMovement} />}
      />
      <Route
        path="/expenseMovement"
        exact
        element={<Private Component={ExpenseMovement} />}
      />
      <Route
        path="/revenueMovement"
        exact
        element={<Private Component={RevenueMovement} />}
      />
      <Route
        path="/myprofile"
        exact
        element={<Private Component={MyProfile} />}
      />
      <Route path="/users" exact element={<Private Component={Users} />} />
      <Route path="/bank" exact element={<Private Component={Bank} />} />
      <Route
        path="/category"
        exact
        element={<Private Component={Category} />}
      />
    </Routes>
  );
};
