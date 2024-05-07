import React from "react";
import "./style.css";
import Navigation from "../../navigationBar/Navigation";
// import { PiDotsNineBold } from "react-icons/pi";
// import img1 from "../Header/imges/dp-transformed.png"
function Header() {
  return (<>
   

    <div className="main_div">
    <Navigation/>
      <a href="#Gmail">Gmail</a>
      <a href="#Images">Images</a>
      {/* <PiDotsNineBold className="icons_dots" /> */}
      <div className="circle_img">
        {/* <img
          // src={img1}
          alt=""
        /> */}
      </div>
    </div>
    </>);
}

export default Header;
