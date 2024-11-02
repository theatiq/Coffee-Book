import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div>
      {/* toaster */}
      <div className="h-16">
        {/* Navbar */}
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
        {/* Outlet */}
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
