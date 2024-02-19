import React from "react";

import "../assets/css/style.css";

import { Outlet } from "react-router-dom";
import Header from "./templates/Header";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
