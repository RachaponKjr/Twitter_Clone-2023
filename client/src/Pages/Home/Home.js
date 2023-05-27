import React from "react";
import "./Home.css";
import { AiOutlineSetting, AiOutlineEllipsis,AiOutlineRetweet,AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded,BiBarChart } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import Login from "./RightS/Login/Login";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-h">
      <div className="left-h">
        <div className="nav-cen">
          <h4>Explore</h4>
          <AiOutlineSetting className="hov-icon icon-ed1"/>
        </div>
        {/*  */}
        <div className="conten-info">
          <div className="left-p">
            <img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png" alt="ic"></img>
          </div>
          <div className="info-con">
            <div className="name-header">
              <div className="nam-s">
              <h2 className="f-w" style={{fontSize:"16px"}}>Pop Crave</h2>
              <h5 className="f-mu" style={{fontSize:"14px"}}>@PopCrave</h5>
              </div>
              <AiOutlineEllipsis className="hov-icon icon-ed1"/>
            </div>
            <p className="f-w">Artists featured on the ‘BARBIE’ soundtrack revealed.</p>
            <img src="https://pbs.twimg.com/media/FxFoeRZaYAAno9F?format=jpg&name=small" alt="pic"></img>
            <div className="ma-l-s">
              <div className="box-ic">
                <BiMessageRounded className="hov-icon ic-ma hov-icon-b"/>
                <h5 className="f-mu f-b">9,703</h5>
              </div>
              <div className="box-ic">
                <AiOutlineRetweet className="hov-icon ic-ma hov-icon-g"/>
                <h5 className="f-mu f-g">102.6K
                </h5>
              </div>
              <div className="box-ic">
                <AiOutlineHeart className="hov-icon ic-ma hov-icon-r"/>
                <h5 className="f-mu f-r">404.3K</h5>
              </div>
              <div className="box-ic">
                <BiBarChart className="hov-icon ic-ma hov-icon-b"/>
                <h5 className="f-mu f-b">14.8M</h5>
              </div>
              <div className="box-ic">
                <FiShare className="hov-icon ic-ma hov-icon-sb"/>
              </div>
            </div>
          </div>
        </div>
        <div className="conten-info">
          <div className="left-p">
            <img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png" alt="ic"></img>
          </div>
          <div className="info-con">
            <div className="name-header">
              <div className="nam-s">
              <h2 className="f-w" style={{fontSize:"16px"}}>Pop Crave</h2>
              <h5 className="f-mu" style={{fontSize:"14px"}}>@PopCrave</h5>
              </div>
              <AiOutlineEllipsis className="hov-icon icon-ed1"/>
            </div>
            <p className="f-w">Artists featured on the ‘BARBIE’ soundtrack revealed.</p>
            <img src="https://pbs.twimg.com/media/FxFoeRZaYAAno9F?format=jpg&name=small" alt="pic"></img>
            <div className="ma-l-s">
              <div className="box-ic">
                <BiMessageRounded className="hov-icon ic-ma hov-icon-b"/>
                <h5 className="f-mu f-b">9,703</h5>
              </div>
              <div className="box-ic">
                <AiOutlineRetweet className="hov-icon ic-ma hov-icon-g"/>
                <h5 className="f-mu f-g">102.6K
                </h5>
              </div>
              <div className="box-ic">
                <AiOutlineHeart className="hov-icon ic-ma hov-icon-r"/>
                <h5 className="f-mu f-r">404.3K</h5>
              </div>
              <div className="box-ic">
                <BiBarChart className="hov-icon ic-ma hov-icon-b"/>
                <h5 className="f-mu f-b">14.8M</h5>
              </div>
              <div className="box-ic">
                <FiShare className="hov-icon ic-ma hov-icon-sb"/>
              </div>
            </div>
          </div>
        </div>
        <div className="conten-info">
          <div className="left-p">
            <img src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png" alt="ic"></img>
          </div>
          <div className="info-con">
            <div className="name-header">
              <div className="nam-s">
              <h2 className="f-w" style={{fontSize:"16px"}}>Pop Crave</h2>
              <h5 className="f-mu" style={{fontSize:"14px"}}>@PopCrave</h5>
              </div>
              <AiOutlineEllipsis className="hov-icon icon-ed1"/>
            </div>
            <p className="f-w">Artists featured on the ‘BARBIE’ soundtrack revealed.</p>
            <img src="https://pbs.twimg.com/media/FxFoeRZaYAAno9F?format=jpg&name=small" alt="pic"></img>
            <div className="ma-l-s">
              <div className="box-ic">
                <BiMessageRounded className="hov-icon ic-ma hov-icon-b"/>
                <h5 className="f-mu f-b">9,703</h5>
              </div>
              <div className="box-ic">
                <AiOutlineRetweet className="hov-icon ic-ma hov-icon-g"/>
                <h5 className="f-mu f-g">102.6K
                </h5>
              </div>
              <div className="box-ic">
                <AiOutlineHeart className="hov-icon ic-ma hov-icon-r"/>
                <h5 className="f-mu f-r">404.3K</h5>
              </div>
              <div className="box-ic">
                <BiBarChart className="hov-icon ic-ma hov-icon-b"/>
                <h5 className="f-mu f-b">14.8M</h5>
              </div>
              <div className="box-ic">
                <FiShare className="hov-icon ic-ma hov-icon-sb"/>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
      <div className="right-h">
        <Login/>
      </div>
      <Outlet/>
    </div>
  );
};

export default Home;
