import React from "react";
import "./style.css";
import Navigation from "../../navigationBar/Navigation";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { Avatar, AvatarBadge } from "@chakra-ui/react"; // import { PiDotsNineBold } from "react-icons/pi";
// import img1 from "../Header/imges/dp-transformed.png"
function Header() {
  return (
    <>
      <Flex className="main_div">
        <Navigation />

        <Avatar
          size="md"
          // name="Prosper Otemuyiwa"
          src="https://media.licdn.com/dms/image/D4D03AQGskfzPEgOe5w/profile-displayphoto-shrink_200_200/0/1689354757691?e=1721260800&v=beta&t=JMeQfQs_L4kEFGRT50PcOW5o4KjhpZ32WuWA7D5NUbY"
          // bgColor={"orange"}
        >
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
        {/* <div className="circle_img"></div> */}
      </Flex>
    </>
  );
}

export default Header;
