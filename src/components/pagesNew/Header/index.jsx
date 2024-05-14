import React from "react";
import "./style.css";
import Navigation from "../../navigationBar/Navigation";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import { PiDotsNineBold } from "react-icons/pi";
// import img1 from "../Header/imges/dp-transformed.png"
function Header() {
  return (
    <>
      <div className="main_div">
        <Navigation />

        <div className="circle_img"></div>
      </div>
    </>
  );
}

export default Header;
