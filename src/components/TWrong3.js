import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const TWrong3 = () => {
  const navigator = useNavigate();
  const options = ["none", "sin", "cos", "tan", "cot", "sec", "cosec"];
  const [trig1, setTrig1] = useState(null);
  const [trig2, setTrig2] = useState(null);
  const [trig3, setTrig3] = useState(null);
  const [trig4, setTrig4] = useState(null);
  const [upCo1, setUpCo1] = useState(null);
  const location = useLocation();
  const equation = location.state;
  const handleUpCo1 = (e) => {
    setUpCo1(e.target.value);
  };
  const [upCo2, setUpCo2] = useState(null);
  const handleUpCo2 = (e) => {
    setUpCo2(e.target.value);
  };

  const [upCo3, setUpCo3] = useState(null);
  const handleUpCo3 = (e) => {
    setUpCo3(e.target.value);
  };

  const [upCo4, setUpCo4] = useState(null);
  const handleUpCo4 = (e) => {
    setUpCo4(e.target.value);
  };
  const [upCo5, setUpCo5] = useState(null);
  const handleUpCo5 = (e) => {
    setUpCo5(e.target.value);
  };
  const [upCo6, setUpCo6] = useState(null);
  const handleUpCo6 = (e) => {
    setUpCo6(e.target.value);
  };
  const [upCo7, setUpCo7] = useState(null);
  const handleUpCo7 = (e) => {
    setUpCo7(e.target.value);
  };
  const [upCo8, setUpCo8] = useState(null);
  const handleUpCo8 = (e) => {
    setUpCo8(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!upCo1 || !upCo2) {
      alert("Enter all the values!");
      return;
    }

    console.log(trig1);
    console.log(trig2);
    if (
      upCo1 === "1" &&
      trig1 === "none" &&
      upCo2 === "1.57" &&
      upCo3 === "0.5" &&
      trig2 === "sin" &&
      upCo4 === "3.14" &&
      upCo5 === "0" &&
      trig3 === "none" &&
      upCo6 === "1" &&
      upCo7 === "1" &&
      trig4 === "sin" &&
      upCo8 === "0"
    ) {
      alert("Right Answer");
      navigator("/trigo");
    } else {
      alert("Wrong Answer");
      setUpCo1("");
      setUpCo2("");
      navigator("/tw2");
    }
  };

  console.log(equation);

  return (
    <>
      <Navbar />
      <header
        style={{ textAlign: "center", whiteSpace: "nowrap", display: "inline" }}
      >
        <h2 className="header">
          <b className="text">Trigonometric Equation:</b>
        </h2>
      </header>
      <section>
        <h5 className="my-5 mx-5">
          In this case f(x) = 2cos <sup>2</sup>x + sec <sup>2</sup>x and b
          (upperlimit) = {Math.PI / 2} and a (lowerlimit)=0
        </h5>
        <h5 className="my-5">
          <span className="mx-5">
            {" "}
            Substitute Here: (Enter the angle in rad){" "}
          </span>
          <br />
          (
          <input
            className="mx-2"
            style={{ width: "50px", marginTop: "25px" }}
            type="text"
            name="upCo1"
            value={upCo1}
            onChange={handleUpCo1}
          />
          <select value={trig1} onChange={(e) => setTrig1(e.target.value)}>
            <option disabled selected>
              Select an option
            </option>
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="text"
            name="upCo2"
            value={upCo2}
            onChange={handleUpCo2}
          />
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="text"
            name="upCo3"
            value={upCo3}
            onChange={handleUpCo3}
          />
          <select value={trig2} onChange={(e) => setTrig2(e.target.value)}>
            <option disabled selected>
              Select an option
            </option>
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="text"
            name="upCo4"
            value={upCo4}
            onChange={handleUpCo4}
          />
          ) - (
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="text"
            name="upCo5"
            value={upCo5}
            onChange={handleUpCo5}
          />
          <select value={trig3} onChange={(e) => setTrig3(e.target.value)}>
            <option disabled selected>
              Select an option
            </option>
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="text"
            name="upCo6"
            value={upCo6}
            onChange={handleUpCo6}
          />
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="text"
            name="upCo7"
            value={upCo7}
            onChange={handleUpCo7}
          />
          <select value={trig4} onChange={(e) => setTrig4(e.target.value)}>
            <option disabled selected>
              Select an option
            </option>
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="text"
            name="upCo8"
            value={upCo8}
            onChange={handleUpCo8}
          />
          )<br></br>
          <br></br>
          <button
            className="btn btn-outline-success my-3 mx-10"
            style={{
              height: "75px",
              width: "100px",
              borderRadius: "50%",
              textAlign: "center",
              marginLeft: "75px",
              marginTop: "100px",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <br />
        </h5>

        {/* <a href="/r1"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '75px'}}>Right</button></a>
              <a href="/w3"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '75px'}}>Wrong</button></a> */}
        <button
          style={{
            marginLeft: "75px",
          }}
          type="button"
          class="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Click here for Hint
        </button>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  Hint
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                Formula to be applied : <sub>b</sub>∫<sup>a</sup> f(x) dx =
                F(b)- F(a) <br></br> Here F(b) is the integrated equation after
                substituting the upper limit
                <br></br> Similarly , F(a) is the integrated equation after
                substituting the lower limit
              </div>
              <div class="modal-footer">
                {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                <button
                  type="button"
                  class="btn btn-dark"
                  data-bs-dismiss="modal"
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TWrong3;
