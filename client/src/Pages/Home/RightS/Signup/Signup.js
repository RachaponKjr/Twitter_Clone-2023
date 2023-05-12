import React, { useEffect, useState } from "react";
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
  const [day, setDay] = useState([]);
  const editday = day

  console.log(editday)
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
  const dayNumber1 = [
    {
      nuberday: "1",
      valueday: "1",
    },
    {
      nuberday: "2",
      valueday: "3",
    },
    {
      nuberday: "4",
      valueday: "5",
    },
    {
      nuberday: "6",
      valueday: "6",
    },
    {
      nuberday: "7",
      valueday: "7",
    },
    {
      nuberday: "8",
      valueday: "8",
    },
    {
      nuberday: "9",
      valueday: "9",
    },
    {
      nuberday: "10",
      valueday: "10",
    },
    {
      nuberday: "11",
      valueday: "12",
    },
    {
      nuberday: "13",
      valueday: "13",
    },{
      nuberday: "14",
      valueday: "14",
    },
    {
      nuberday: "15",
      valueday: "15",
    },
    {
      nuberday: "16",
      valueday: "16",
    },
    {
      nuberday: "17",
      valueday: "17",
    },
    {
      nuberday: "18",
      valueday: "18",
    },
    {
      nuberday: "19",
      valueday: "19",
    },
    {
      nuberday: "20",
      valueday: "20",
    },
    {
      nuberday: "21",
      valueday: "21",
    },
    {
      nuberday: "22",
      valueday: "22",
    },
    {
      nuberday: "23",
      valueday: "23",
    },
    {
      nuberday: "24",
      valueday: "24",
    },
    {
      nuberday: "25",
      valueday: "25",
    },
    {
      nuberday: "26",
      valueday: "26",
    },
    {
      nuberday: "27",
      valueday: "27",
    },
    {
      nuberday: "28",
      valueday: "28",
    },
    {
      nuberday: "29",
      valueday: "29",
    },
    {
      nuberday: "30",
      valueday: "30",
    }
  ];
  const dayNumber2 = [
    {
      nuberday: "1",
      valueday: "1",
    },
    {
      nuberday: "2",
      valueday: "3",
    },
    {
      nuberday: "4",
      valueday: "5",
    },
    {
      nuberday: "6",
      valueday: "6",
    },
    {
      nuberday: "7",
      valueday: "7",
    },
    {
      nuberday: "8",
      valueday: "8",
    },
    {
      nuberday: "9",
      valueday: "9",
    },
    {
      nuberday: "10",
      valueday: "10",
    },
    {
      nuberday: "11",
      valueday: "12",
    },
    {
      nuberday: "13",
      valueday: "13",
    },{
      nuberday: "14",
      valueday: "14",
    },
    {
      nuberday: "15",
      valueday: "15",
    },
    {
      nuberday: "16",
      valueday: "16",
    },
    {
      nuberday: "17",
      valueday: "17",
    },
    {
      nuberday: "18",
      valueday: "18",
    },
    {
      nuberday: "19",
      valueday: "19",
    },
    {
      nuberday: "20",
      valueday: "20",
    },
    {
      nuberday: "21",
      valueday: "21",
    },
    {
      nuberday: "22",
      valueday: "22",
    },
    {
      nuberday: "23",
      valueday: "23",
    },
    {
      nuberday: "24",
      valueday: "24",
    },
    {
      nuberday: "25",
      valueday: "25",
    },
    {
      nuberday: "26",
      valueday: "26",
    },
    {
      nuberday: "27",
      valueday: "27",
    },
    {
      nuberday: "28",
      valueday: "28",
    },
    {
      nuberday: "29",
      valueday: "29",
    },
    {
      nuberday: "30",
      valueday: "30",
    },
    {
      nuberday: "31",
      valueday: "31",
    }
  ];
  const dayNumber3 = [
    {
      nuberday: "1",
      valueday: "1",
    },
    {
      nuberday: "2",
      valueday: "3",
    },
    {
      nuberday: "4",
      valueday: "5",
    },
    {
      nuberday: "6",
      valueday: "6",
    },
    {
      nuberday: "7",
      valueday: "7",
    },
    {
      nuberday: "8",
      valueday: "8",
    },
    {
      nuberday: "9",
      valueday: "9",
    },
    {
      nuberday: "10",
      valueday: "10",
    },
    {
      nuberday: "11",
      valueday: "12",
    },
    {
      nuberday: "13",
      valueday: "13",
    },{
      nuberday: "14",
      valueday: "14",
    },
    {
      nuberday: "15",
      valueday: "15",
    },
    {
      nuberday: "16",
      valueday: "16",
    },
    {
      nuberday: "17",
      valueday: "17",
    },
    {
      nuberday: "18",
      valueday: "18",
    },
    {
      nuberday: "19",
      valueday: "19",
    },
    {
      nuberday: "20",
      valueday: "20",
    },
    {
      nuberday: "21",
      valueday: "21",
    },
    {
      nuberday: "22",
      valueday: "22",
    },
    {
      nuberday: "23",
      valueday: "23",
    },
    {
      nuberday: "24",
      valueday: "24",
    },
    {
      nuberday: "25",
      valueday: "25",
    },
    {
      nuberday: "26",
      valueday: "26",
    },
    {
      nuberday: "27",
      valueday: "27",
    },
    {
      nuberday: "28",
      valueday: "28",
    },
    {
      nuberday: "29",
      valueday: "29",
    }
  ];

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
  const handleChange = (e) => {
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
              <select>
                {editday.map((editday,index)=>{
                  return <option key={index} value={editday.valueday}>{editday.nuberday}</option>
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
