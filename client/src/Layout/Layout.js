import React from "react";
import { BsTwitter } from "react-icons/bs";
import { HiHashtag } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import "./Layout.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section style={{display:"flex",flexDirection:"row",width:"100vw",maxWidth:"100%"}}>
      <nav id="layout">
        <div className="nav-b">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "max-content",
              height: "max-content",
              gap: "0.5rem",
              color: "rgb(231, 231, 231);",
            }}
          >
            <div className="box-hh cur-p">
              <div className="box-h">
                <BsTwitter />
              </div>
            </div>
            <div className="box-i cur-p">
              <div className="box-b">
                <HiHashtag />
                <h4 className="fs-18">Explore</h4>
              </div>
            </div>
            <div className="box-i cur-p">
              <div className="box-b">
                <AiOutlineSetting />
                <h4 className="fs-18">Settings</h4>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div style={{width:"75%",maxWidth:"100%"}}>
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
