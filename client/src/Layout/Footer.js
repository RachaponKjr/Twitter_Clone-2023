import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="main-fo">
      <div className="sp"></div>
      <div className="box-ioo">
        <div>
          <h4 className="f-s24">Don’t miss what’s happening</h4>
          <h6 className="f-s18">
          People on Twitter are the first to know.
          </h6>
        </div>
        <div className="box-btn">
            <ul style={{display:"flex",height:"2.5rem",listStyle:'none',gap:'1rem'}}>
            <li className="li-btn"><Link to="/login"style={{width:"100%",height:"100%",display:'flex',justifyContent:'center',alignItems:'center',color:"white",textDecoration:'none',borderRadius:"50px"}}>Log in</Link></li>
            <li className="li-btn si-btn"><Link to="/signup" style={{width:"100%",height:"100%",display:'flex',justifyContent:'center',alignItems:'center',color:"black",textDecoration:'none',borderRadius:"50px"}}>Sign up</Link></li>
            </ul></div>
      </div>
    </div>
  );
};

export default Footer;
