import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Mw3() {
  const navigator = useNavigate();
  const [upCo1, setUpCo1] = useState("");
  const handleUpCo1 = (e) => {
    setUpCo1(e.target.value);
  };


const [upCo2, setUpCo2] = useState("");
const handleUpCo2 = (e) => {
  setLoCo2(e.target.value);
};

  const [upPo1, setUpPo1] = useState("");
  const handleUpPo1 = (e) => {
    setUpPo1(e.target.value);
  };


  const [loCo1, setLoCo1] = useState("");
  const handleLoCo1 = (e) => {
    setLoCo1(e.target.value);
  };
  const [loCo2, setLoCo2] = useState(" ");
  const handleLoCo2 = (e) => {
    setLoCo2(e.target.value);
  };

  const [loPo1, setLoPo1] = useState("");
  const handleLoPo1 = (e) => {
    setLoPo1(e.target.value);
  };


  const handleSubmit = (e) => {
    if (
      upCo1 == "" ||
      upCo2 == "" ||
      //!upCo3 || 
      upPo1 == "" ||
     // !upPo2 ||
      //!upPo3 ||
      loCo1 == "" ||
      loCo2 == "" ||
      //!loCo3 ||
      loPo1 == ""
      //!loPo2 
      //!loPo3
    ) {
      alert("Enter all the values!");
      return;
    }
    console.log(
      upCo1,
      
      //upCo3,
      upPo1,
      upCo2,
      //upPo2,
      //upPo3,
      loCo1,
      loPo1,
      loCo2,
      //loCo3,
      
     // loPo2,
      //loPo3
    );
    if (
      upCo1 == "2.71" &&
      upPo1 == "1"&&
      upCo2 == "1" &&
      //upPo2 == 2 &&
      //upCo3 == 10 &&
      //upPo3 == 1 &&
      loCo1 == "2.71" &&
      loPo1 == "0"  &&
      loCo2 == "0"
     // loPo2 == 2 
      //loCo3 == 5 &&
      //loPo3 == 1
    ) {
      alert("Right Answer!!!");
      navigator("/r1");
    } else {
      alert("Wrong Answer!!!");
      setUpCo1(null)
      setUpPo1(null);
      setUpCo2(null);
      //setUpPo2(null);
      //setUpCo3(null);
      //setUpPo3(null);
      setLoCo1(null);
      setLoPo1(null);
      setLoCo2(null);
      //setLoPo2(null);
      //setLoCo3(null);
      //setLoPo3(null);
      navigator("/mw3");
    }
  };

  return (
    <>
      <Navbar />
      <header
        style={{ textAlign: "center", whiteSpace: "nowrap", display: "inline" }}
      >
        <h2 className="header">
          <b className="text">Mixed Type Equation:</b>
        </h2>
      </header>
      <section>
        <h5 className="my-5 mx-5"></h5>
        <h5 className="my-5 mx-5">
          In this case f(x) = e <sup>x</sup> / (x+1) where b(Upper Limit )= 1 and a(Lower Limit) = 0
        </h5>
        <h5 className="my-5 mx-5">
          Substitute Here: (
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="text"
            name="upCo1"
            value={upCo1}
            onChange={handleUpCo1}
          />
          <sup>
            <input
              type="text"
              style={{ width: "40px" }}
              name="upPo1"
              value={upPo1}
              onChange={handleUpPo1}
            />
          </sup>
          /
          (
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="text"
            name="upCo2"
            value={upCo2}
            onChange={handleUpCo2}
          />
          +1
          )

          ) - (
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="text"
            name="loCo1"
            value={loCo1}
            onChange={handleLoCo1}
          />
          <sup>
            <input
              type="text"
              style={{ width: "40px" }}
              name="loPo1"
              value={loPo1}
              onChange={handleLoPo1}
            />
          </sup>
          /
        ( <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="text"
            name="loCo2"
            value={loCo2}
            onChange={handleLoCo2}
          />
    +1
        )

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
        <p> <b> Note : Substitute the value of e upto 2 decimal places only. </b>
     </p>

        {/* <a href="/r1"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '75px'}}>Right</button></a>
            <a href="/w3"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '75px'}}>Wrong</button></a> */}
        <button
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
}
