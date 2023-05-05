import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Mixed() {
    const [route, setRoute] = useState("");

    const handleClick = () => {
      if (document.getElementById("answer").value == 0.355) {
        setRoute("/");
      } else {
        setRoute("mw1/");
      }
    };
    return (
      <>
        <Navbar />
        <h2 className="header">
          <b className="text"> Mixed Type Equation:</b>
        </h2>
        <div className="my-20">
          <form action="/">
            <br />
            <label htmlFor="noofterms" className="my-1 mx-2">
              The Equation to be integrated :{" "}
              <label className="my-1">
                {" "}
                <h5>
                ∫ x.e<sup>x</sup> / (x+1)<sup>2</sup> dx
            
                </h5>{" "}
              </label>
            </label>
            <br />
            <br />
  
            <label htmlFor="noofterms" className="my-6 mx-2">
              The upper limit is :{" "}
              <label className="my-6">
                {" "}
                <h5> 1 </h5>{" "}
              </label>
            </label>
            <br />
            <br />
  
            <label htmlFor="noofterms" className="my-6 mx-2">
              The lower limit is :{" "}
              <label className="my-6">
                {" "}
                <h5> 0 </h5>{" "}
              </label>
            </label>
            <br />
            <br />
            <label htmlFor="noofterms" className="my-6 mx-2">
              The Area Under the Curve is:
            </label>
            <input
              className="mx-3"
              style={{ width: "50px" }}
              type="number"
              id="answer"
            />
            <b>Note 1 : Enter the answer upto two decimal places only .</b>
            <br/>
            <b> Note 2 : Consider the value of e as 2.71 only</b>
            
          </form>
          <a href={route}>
            <button
              onClick={handleClick}
              className="btn btn-outline-success my-3 mx-10"
              style={{
                height: "75px",
                width: "100px",
                borderRadius: "50%",
                textAlign: "center",
                marginLeft: "75px",
              }}
            >
              Submit
            </button>
          </a>
        </div>
      </>
    );
  }
