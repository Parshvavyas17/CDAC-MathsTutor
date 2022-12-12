import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function WrongP1() {
  const navigator = useNavigate();
  const [upCo1, setUpCo1] = useState(null);
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
  const [upPo1, setUpPo1] = useState(null);
  const handleUpPo1 = (e) => {
    setUpPo1(e.target.value);
  };
  const [upPo2, setUpPo2] = useState(null);
  const handleUpPo2 = (e) => {
    setUpPo2(e.target.value);
  };
  const [upPo3, setUpPo3] = useState(null);
  const handleUpPo3 = (e) => {
    setUpPo3(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!upCo1 || !upCo2 || !upCo3 || !upPo1 || !upPo2 || !upPo3) {
      alert("Enter all the values!");
      return;
    }
    console.log(upCo1, upCo2, upCo3, upPo1, upPo2, upPo3);
    if (
      upCo1 == 1 &&
      upPo1 == 3 &&
      upCo2 == -1 &&
      upPo2 == 2 &&
      upCo3 == 5 &&
      upPo3 == 1
    ) {
      alert("Right Answer!!!");
      navigator("/r1");
    } else {
      alert("Wrong Answer!!!");
      setUpCo1(null);
      setUpPo1(null);
      setUpCo2(null);
      setUpPo2(null);
      setUpCo3(null);
      setUpPo3(null);
      navigator("/w2");
    }
  };

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
      <section className="my-5 mx-4">
        <h3>Polynomial Equation displayed to you: </h3>
        <h5>
          3x<sup>2</sup> - 2x + 5
        </h5>
        <h3>Integrated Equation: </h3>
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
        )
        <br />
        <div></div>
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
                Formula to be applied :{" "}
                <b>
                  {" "}
                  ∫ x<sup>n</sup> dx = x<sup>n+1</sup>/n+1{" "}
                </b>
                <br></br>where n is the power of the term in the equation to be
                integrated
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
        <a href="/w3">
          {" "}
          <button
            className="btn btn-outline-success my-3 mx-10"
            style={{
              height: "75px",
              width: "100px",
              borderRadius: "50%",
              textAlign: "center",
              marginLeft: "25px",
            }}
            onClick={handleSubmit}
          >
            Next
          </button>
        </a>
      </section>
    </>
  );
}
