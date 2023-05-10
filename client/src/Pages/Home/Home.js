import React from "react";
import "./Home.css";
import { AiOutlineSetting } from "react-icons/ai";
import Login from "./RightS/Login/Login";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-h">
      <div className="left-h">
        <div className="nav-cen">
          <h4>Explore</h4>
          <AiOutlineSetting className="hov-icon"/>
        </div>
        <div className="conten-info">

        </div>
      </div>
      <div className="right-h">
        <Login/>
      </div>
      <Outlet/>
    </div>
  );
};

export default Home;
