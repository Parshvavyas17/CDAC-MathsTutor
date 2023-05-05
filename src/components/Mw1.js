import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Mw1() {
    const navigator = useNavigate();
    const [upCo1, setUpCo1] = useState(null);
    const handleUpCo1 = (e) => {
      setUpCo1(e.target.value);
    };

    const [upPo1, setUpPo1] = useState(null);
    const handleUpPo1 = (e) => {
      setUpPo1(e.target.value);
    };

    const handleSubmit = (e) => {
        if (!upCo1 || !upPo1) {
          alert("Enter all the values!");
          return;
        }
        console.log(upCo1, upPo1);
        if (
          upCo1 == 'e' &&
          upPo1 == 1

        
        ) {
          alert("Right Answer!!!");
          navigator("/Mw");
        } else {
          alert("Wrong Answer!!!");
          setUpCo1(null);
          setUpPo1(null);
      
          navigator("/mw2");
        }
      };

      return (
        <a>
          <Navbar />
          <header
            style={{ textAlign: "center", whiteSpace: "nowrap", display: "inline" }}
          >
            <h2 className="header">
              <b className="text">Mixed Type Equation:</b>
            </h2>
          </header>
          <section className="my-5 mx-4">
            <h3>Mixed Equation displayed to you: </h3>
            <h5>
            ∫ x.e<sup>x</sup> / (x+1)<sup>2</sup> dx

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
              <b> / </b> (x+1) 
              )
      
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
              1 .  Adjust the Numerator by adding and subtracting 1 from it and observe the numerator and denominator now . 
              <br/>
              2 . Multiply e <sup>x</sup> with (x+1) and -1 . 
 
                <b>
                
                
                </b>
                <br></br>
                
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
      
       </section>
              </a>



      );


    }
