import React, { useState } from "react";
import "./Signup.css";
import { GrClose } from "react-icons/gr";

const Signup = () => {
  // const [formStep, setFormStep] = useState(0)
  const [dataB, setDataB] = useState([
    {
      month: "",
      dayvalue: "",
      year: "",
    },
  ]);

  const data = [
    {
      label: "January",
      value: "January",
    },
    {
      label: "February",
      value: "February",
    },
    {
      label: "March",
      value: "March",
    },
    {
      label: "April",
      value: "April",
    },
    {
      label: "May",
      value: "May",
    },
    {
      label: "June",
      value: "June",
    },
    {
      label: "July",
      value: "July",
    },
    {
      label: "August",
      value: "August",
    },
    {
      label: "September",
      value: "September",
    },
    {
      label: "October",
      value: "October",
    },
    {
      label: "November",
      value: "November",
    },
    {
      label: "December",
      value: "December",
    },
  ];

  const handleChange =  (e) => {
    setDataB({ month: e.target.value });
  };

  return (
    <div className="by-si">
      <div className="h-si">
        <GrClose className="icon-x" />
        <h2>Step 1 of 5</h2>
      </div>
      <div className="form-su">
        <form
          style={{ backgroundColor: "pink", width: "100%", height: "100%" }}
        >
          <h1>Create your account</h1>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="Phone"></input>
          <h4>Use email instead</h4>
          <div>
            <h3>Date o birth</h3>
            <p>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
            <div>
              <select onChange={handleChange}>
                {data.map((data, index) => {
                  return (
                    <option key={index} value={data.value}>
                      {data.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
