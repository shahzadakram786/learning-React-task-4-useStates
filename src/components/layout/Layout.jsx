import React from "react";
import Header from "../pagesNew/Header";
import Footer from "../pagesNew/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
