import React, { useEffect, useState } from "react";
import "./Signup.css";
import { GrClose } from "react-icons/gr";
import {
  data,
  dayNumber1,
  dayNumber2,
  dayNumber3,
} from "../../../../Data/Data";

import { loopYear } from "../../../../FU/Year_fu";

const Signup = () => {
  const [formStep, setFormStep] = useState(1);
  const [dataB, setDataB] = useState([
    {
      month: "",
      dayvalue: "",
      year: "",
    },
  ]);
  const [day, setDay] = useState([]);

  const editday = day;
  const dataY = loopYear();

  /* eslint-disable */
  useEffect(() => {
    chackMonth();
  }, [dataB]);
  /* eslint-enable */

  function chackMonth() {
    switch (dataB.month) {
      case "January":
        setDay(dayNumber2);
        break;
      case "February":
        setDay(dayNumber3);
        break;
      case "March":
        setDay(dayNumber2);
        break;
      case "	April":
        setDay(dayNumber1);
        break;
      case "	May":
        setDay(dayNumber2);
        break;
      case "June":
        setDay(dayNumber1);
        break;
      case "July":
        setDay(dayNumber2);
        break;
      case "August":
        setDay(dayNumber2);
        break;
      case "September":
        setDay(dayNumber1);
        break;
      case "October":
        setDay(dayNumber2);
        break;
      case "November":
        setDay(dayNumber1);
        break;
      case "December":
        setDay(dayNumber2);
        break;
      default:
        setDay(dayNumber2);
        break;
    }
  }
  const comFromStep= () =>{
    setFormStep(cur => cur + 1)
  }
  const btnSub = () => {
    if (formStep > 2){
      return undefined
    }else{
      return(
      <button type="button" onClick={comFromStep} className="btn-s">
      Next
    </button>)
    }
  } 
  const handleChange = (e) => {
    setDataB({ month: e.target.value });
  };

  return (
    <div className="test">
      <div className="by-si">
        <div className="h-si">
          <GrClose className="icon-x" />
          <h2 className="f-h2">Step {formStep} of 5</h2>
        </div>
        <div className="form-su">
          <form
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {formStep === 1 && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1 className="h1-head">Create your account</h1>
                <input
                  type="text"
                  placeholder="Name"
                  className="input-sty"
                ></input>
                <input
                  type="text"
                  placeholder="Phone"
                  className="input-sty"
                ></input>
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    color: "#1D9BF0",
                    cursor: "pointer",
                  }}
                  className="h-u-m"
                >
                  Use email instead
                </h4>
                <div className="date-o-b">
                  <h3
                    style={{
                      color: "white",
                      fontSize: "16px",
                      margin: "0.5rem 0",
                      fontFamily: "Rubik,sans-serif",
                    }}
                  >
                    Date o birth
                  </h3>
                  <p className="p-sty">
                    This will not be shown publicly. Confirm your own age, even
                    if this account is for a business, a pet, or something else.
                  </p>
                  <div className="date-sty">
                    <select onChange={handleChange} className="opt-1 sty-date">
                      {data.map((data, index) => {
                        return (
                          <option key={index} value={data.value}>
                            {data.label}
                          </option>
                        );
                      })}
                    </select>
                    <select className="opt-2 sty-date">
                      {editday.map((editday, index) => {
                        return (
                          <option key={index} value={editday.valueday}>
                            {editday.nuberday}
                          </option>
                        );
                      })}
                    </select>
                    <select className="opt-3 sty-date">
                      {dataY.map((dataY, index) => {
                        return (
                          <option key={index} value={dataY.valueYear}>
                            {dataY.numberYear}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {formStep === 2 && (<div className="head-2">
              <div>
                <h3 className="c-w f-30 mg-2">Customize your experience</h3>
                <h4 className="c-w f-24 mg-02">Track where you see Twitter content across the web</h4>
                <div style={{display:'flex',flexDirection:'row',gap:'0.5rem'}}>
                  <h5 className="c-w f-18 mg-02">Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.</h5>
                  <input type="checkbox" className="in-st"></input>
                </div>
              </div>
              <h5 className="mg-t-2 f-18">By signing up, you agree to our <span className="sp-tx">Terms</span>, <span className="sp-tx">Privacy Policy</span>, and <span className="sp-tx">Cookie Use</span>. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. <span className="sp-tx">Learn more</span></h5>
            </div>)}
            
            {formStep === 3 && (<div>

            </div>)}
            {btnSub()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
