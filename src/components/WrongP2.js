import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function WrongP2() {
  const navigator = useNavigate();
  const location = useLocation();
  const equation = location.state;
  const [upCo1, setUpCo1] = useState("");
  const handleUpCo1 = (e) => {
    setUpCo1(e.target.value);
  };
  const [upCo2, setUpCo2] = useState("");
  const handleUpCo2 = (e) => {
    setUpCo2(e.target.value);
  };
  const [upCo3, setUpCo3] = useState("");
  const handleUpCo3 = (e) => {
    setUpCo3(e.target.value);
  };
  const [upPo1, setUpPo1] = useState("");
  const handleUpPo1 = (e) => {
    setUpPo1(e.target.value);
  };
  const [upPo2, setUpPo2] = useState("");
  const handleUpPo2 = (e) => {
    setUpPo2(e.target.value);
  };
  const [upPo3, setUpPo3] = useState("");
  const handleUpPo3 = (e) => {
    setUpPo3(e.target.value);
  };
  const [loCo1, setLoCo1] = useState("");
  const handleLoCo1 = (e) => {
    setLoCo1(e.target.value);
  };
  const [loCo2, setLoCo2] = useState("");
  const handleLoCo2 = (e) => {
    setLoCo2(e.target.value);
  };
  const [loCo3, setLoCo3] = useState("");
  const handleLoCo3 = (e) => {
    setLoCo3(e.target.value);
  };
  const [loPo1, setLoPo1] = useState("");
  const handleLoPo1 = (e) => {
    setLoPo1(e.target.value);
  };
  const [loPo2, setLoPo2] = useState("");
  const handleLoPo2 = (e) => {
    setLoPo2(e.target.value);
  };
  const [loPo3, setLoPo3] = useState("");
  const handleLoPo3 = (e) => {
    setLoPo3(e.target.value);
  };

  const handleSubmit = (e) => {
    if (
      !upCo1 ||
      !upCo2 ||
      !upCo3 ||
      !upPo1 ||
      !upPo2 ||
      !upPo3 ||
      !loCo1 ||
      !loCo2 ||
      !loCo3 ||
      !loPo1 ||
      !loPo2 ||
      !loPo3
    ) {
      alert("Enter all the values!");
      return;
    }
    // console.log(
    //   upCo1,
    //   upCo2,
    //   upCo3,
    //   upPo1,
    //   upPo2,
    //   upPo3,
    //   loCo1,
    //   loCo2,
    //   loCo3,
    //   loPo1,
    //   loPo2,
    //   loPo3
    // );
    if (
      upCo1 === "2" &&
      upPo1 === "3" &&
      upCo2 === "-2" &&
      upPo2 === "2" &&
      upCo3 === "10" &&
      upPo3 === "1" &&
      loCo1 === "1" &&
      loPo1 === "3" &&
      loCo2 === "-1" &&
      loPo2 === "2" &&
      loCo3 === "5" &&
      loPo3 === "1"
    ) {
      alert("Right Answer!!!");
      navigator("/r1");
    } else {
      alert("Wrong Answer!!!");
      setUpCo1("");
      setUpPo1("");
      setUpCo2("");
      setUpPo2("");
      setUpCo3("");
      setUpPo3("");
      setLoCo1("");
      setLoPo1("");
      setLoCo2("");
      setLoPo2("");
      setLoCo3("");
      setLoPo3("");
      navigator("/w3", { state: equation });
    }
  };

  // console.log(equation);

  return (
    <>
      <Navbar />
      <header
        style={{ textAlign: "center", whiteSpace: "nowrap", display: "inline" }}
      >
        <h2 className="header">
          <b className="text">Polynomial Equation:</b>
        </h2>
      </header>
      <section>
        <h5 className="my-5 mx-5">
          In this case f(x) = 3x <sup>2</sup> -2x+5 and b (upperlimit) = 2 and a
          (lowerlimit)=1
        </h5>
        <h5 className="my-5 mx-5">
          Substitute Here: (
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="number"
            name="upCo1"
            value={upCo1}
            onChange={handleUpCo1}
          />
          <sup>
            <input
              type="number"
              style={{ width: "40px" }}
              name="upPo1"
              value={upPo1}
              onChange={handleUpPo1}
            />
          </sup>
          +
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="number"
            name="upCo2"
            value={upCo2}
            onChange={handleUpCo2}
          />
          <sup>
            <input
              type="number"
              style={{ width: "40px" }}
              name="upPo2"
              value={upPo2}
              onChange={handleUpPo2}
            />
          </sup>
          +
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="number"
            name="upCo3"
            value={upCo3}
            onChange={handleUpCo3}
          />
          <sup>
            <input
              type="number"
              style={{ width: "40px" }}
              name="upPo3"
              value={upPo3}
              onChange={handleUpPo3}
            />
          </sup>
          ) - (
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="number"
            name="loCo1"
            value={loCo1}
            onChange={handleLoCo1}
          />
          <sup>
            <input
              type="number"
              style={{ width: "40px" }}
              name="loPo1"
              value={loPo1}
              onChange={handleLoPo1}
            />
          </sup>
          +
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="number"
            name="loCo2"
            value={loCo2}
            onChange={handleLoCo2}
          />
          <sup>
            <input
              type="number"
              style={{ width: "40px" }}
              name="loPo2"
              value={loPo2}
              onChange={handleLoPo2}
            />
          </sup>
          +
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="number"
            name="loCo3"
            value={loCo3}
            onChange={handleLoCo3}
          />
          <sup>
            <input
              type="number"
              style={{ width: "40px" }}
              name="loPo3"
              value={loPo3}
              onChange={handleLoPo3}
            />
          </sup>
          )
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
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Click here for Hint
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Hint
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Formula to be applied : <sub>b</sub>∫<sup>a</sup> f(x) dx =
                F(b)- F(a) <br></br> Here F(b) is the integrated equation after
                substituting the upper limit
                <br></br> Similarly , F(a) is the integrated equation after
                substituting the lower limit
              </div>
              <div className="modal-footer">
                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                <button
                  type="button"
                  className="btn btn-dark"
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
}
