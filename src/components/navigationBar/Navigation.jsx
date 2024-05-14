import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <nav className="navDiv">
      <ul>
        <li>
          <Tabs>
            <TabList>
              <Tab>
                <Link className="link" to="/home">
                  Home
                </Link>
              </Tab>
              <Tab>
                <Link className="link" to="about">
                  About
                </Link>
              </Tab>
              <Tab>
                <a href="#Gmail">Gmail</a>
              </Tab>

              <Tab>
                <a href="#Images">Images</a>
              </Tab>
            </TabList>
          </Tabs>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
