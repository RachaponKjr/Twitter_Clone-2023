import React from "react";
import "./Home.css";
import { AiOutlineSetting, AiOutlineEllipsis } from "react-icons/ai";
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
          <div className="left-p">
            <img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png" alt="ic"></img>
          </div>
          <div className="info-con">
            <div className="name-header">
              <div className="nam-s">
              <h2>Pop Crave</h2>
              <h5>@PopCrave</h5>
              </div>
              <AiOutlineEllipsis className="hov-icon"/>
            </div>
            <p>Artists featured on the ‘BARBIE’ soundtrack revealed.</p>
            {/* <img src="https://pbs.twimg.com/media/Fw-dJ1hX0AEdvCx?format=jpg&name=small" alt="pic"></img> */}
          </div>
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
