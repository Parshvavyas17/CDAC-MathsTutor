import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Ew3 = () => {
    const navigator = useNavigate();
    const [upCo1, setUpCo1] = useState(null);
    const handleUpCo1 = (e) => {
      setUpCo1(e.target.value);
    };
    const [upCo2, setUpCo2] = useState(null);
    const handleUpCo2 = (e) => {
      setUpCo2(e.target.value);
    };
    // const [upCo3, setUpCo3] = useState(null);
    // const handleUpCo3 = (e) => {
    //   setUpCo3(e.target.value);
    // };
    const [upPo1, setUpPo1] = useState(null);
    const handleUpPo1 = (e) => {
      setUpPo1(e.target.value);
    };
    const [upPo2, setUpPo2] = useState(null);
    const handleUpPo2 = (e) => {
      setUpPo2(e.target.value);
    };


    const [loCo3, setLoCo3] = useState(null);
    const handleLoCo3 = (e) => {
      setLoCo3(e.target.value);
    };


    const [loPo3, setLoPo3] = useState(null);
    const handleLoPo3 = (e) => {
      setLoPo3(e.target.value);
    };
    // const [upPo3, setUpPo3] = useState(null);
    // const handleUpPo3 = (e) => {
    //   setUpPo3(e.target.value);
    // };


    // const [loCo3, setLoCo3] = useState(null);
    // const handleLoCo3 = (e) => {
    //   setLoCo3(e.target.value);
    // };


    const [loCo4, setLoCo4] = useState(null);
    const handleLoCo4 = (e) => {
      setLoCo4(e.target.value);
    };

    const [loPo4, setLoPo4] = useState(null);
    const handleLoPo4 = (e) => {
      setLoPo4(e.target.value);
    };





    // const [loPo3, setLoPo3] = useState(null);
    // const handleLoPo3 = (e) => {
    //   setLoPo3(e.target.value);
    // };
  
    const handleSubmit = (e) => {
      if (
        !upCo1 ||
        !upCo2 ||
        !upPo1 ||
        !upPo2 ||
        !loCo3 ||
        !loCo4 ||
        !loPo3 || 
        !loPo4 
      ) {
        alert("Enter all the values!");
        console.log(
          upCo1,
          upPo1,
          upCo2,
          upPo2,
  
          loCo3,
          loPo3,
          loCo4,
          loPo4);
        return;
      }
      console.log(
        upCo1,
        upPo1,
        upCo2,
        upPo2,

        loCo3,
        loPo3,
        loCo4,
        loPo4, 
        
      );
      if (
        upCo1 == "0.67" &&
        upCo2 == "e" &&
        upPo1 == "0" &&
        upPo2 == "0.67" &&


        loCo3 == "0.67" &&
        loCo4 == "e" &&
        loPo3 == "ln(3/2)" &&
        loPo4 ==  "0.67"
      ) {/////////////     alert("Right Answer!!!");
        navigator("/expo");
      } else {
        alert("Wrong Answer!!!");
        setUpCo1(null);
        setUpPo1(null);
        setUpCo2(null);
        setUpPo2(null);
        // setUpCo3(null);
        // setUpPo3(null);
        setLoCo3(null);
        setLoPo3(null);
        setLoCo4(null);
        setLoPo4(null);
        // setLoCo3(null);
        // setLoPo3(null);
        navigator("/ew2");
      }
    };
  
    return (
      <>
        <Navbar />
        <header
          style={{ textAlign: "center", whiteSpace: "nowrap", display: "inline" }}
        >
          <h2 className="header">
            <b className="text">Exponential Equation:</b>
          </h2>
        </header>
        <section>
          <h5 className="my-5 mx-5"></h5>
          <h5 className="my-5 mx-5">
            In this Question  f(x) =  ∫e<sup>x</sup>(1+e<sup>x</sup>) <sup>1/2</sup> dx.
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

   
    <text> ( </text>
         1 +
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "" }}
            type="text"
            name="upCo2"
            value={upCo2}
            onChange={handleUpCo2}
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
          )

          <sup>
            <input
              type="text"
              style={{ width: "40px" }}
              name="upPo2"
              value={upPo2}
              onChange={handleUpPo2}
            />
          </sup>
          

       
            
            {/* <input
              className=""
              style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
              type="text"
              name="upCo3"
              value={upCo3}
              onChange={handleUpCo3}
            />
            <sup>
              <input
                type="text"
                style={{ width: "40px" }}
                name="upPo3"
                value={upPo3}
                onChange={handleUpPo3}
              />
            </sup> */}
            ) - (
              <input
            className=""
            style={{ width: "50px", marginLeft: "0px", marginRight: "2px" }}
            type="text"
            name="loCo3"
            value={loCo3}
            onChange={handleLoCo3}
          />

   
    <text> ( </text>
         1 +
          <input
            className=""
            style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
            type="text"
            name="loCo4"
            value={loCo4}
            onChange={handleLoCo4}
          />
          <sup>
            <input
              type="text"
              style={{ width: "40px" }}
              name="loPo3"   
              value={loPo3}
              onChange={handleLoPo3}
            />
          </sup>
          )
          <sup>
            <input
              type="text"
              style={{ width: "40px" }}
              name="loPo4"
              value={loPo4}
              onChange={handleLoPo4}
            />
          </sup>
          

          
            {/* +
            <input
              className=""
              style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
              type="text"
              name="loCo3"
              value={loCo3}
              onChange={handleLoCo3}
            />
            <sup>
              <input
                type="text"
                style={{ width: "40px" }}
                name="loPo3"
                value={loPo3}
                onChange={handleLoPo3}
              />
            </sup> */}
            )

            <br />
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
            class="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{marginLeft: "75px"}}
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
                  substituting the upper limit (ln(3/2))
                  <br></br> Similarly , F(a) is the integrated equation after
                  substituting the lower limit ( 0 )
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

export default Ew3
