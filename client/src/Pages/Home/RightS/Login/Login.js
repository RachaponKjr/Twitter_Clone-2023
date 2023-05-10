import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="box-m">
      <h4 className="f-24 m-1">New to Twitter?</h4>
      <h6 className="f-16">
        Sign up now to get your own personalized timeline!
      </h6>
      <div className="list-regis">
        <div className="item-regis">
          <div className="bb-re">
            <FcGoogle className="icon-reg" />
            <h5 className="text-reg">Sign up with Google</h5>
          </div>
        </div>
        <div className="item-regis">
          <div className="bb-re">
            <AiFillApple className="icon-reg" />
            <h5 className="text-reg">Sign up with Apple</h5>
          </div>
        </div>
        <div className="item-regis">
        <Link to="/signup" className="linkst">
          <div className="bb-re" style={{padding:"0 1rem"}}>
            {/* <div className="icon-reg"></div> */}
            <h5 className="text-reg" >Create account</h5>
          </div>
          </Link>
        </div>
      </div>
      <h6 className="pv-p">
        By signing up, you agree to the <span>Terms of Service</span> and
        <span> Privacy Policy</span>, including <span>Cookie Use.</span>
      </h6>
    </div>
  );
};

export default Login;
