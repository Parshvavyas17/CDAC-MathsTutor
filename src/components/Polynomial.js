import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Polynomial() {
  const [equation, setEquation] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getEquation = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/poly");
        console.log(response.data.data);
        return response.data.error ? {} : response.data.data;
      } catch (err) {
        console.log(err.messsage);
        return {};
      }
    };

    getEquation()
      .then((data) => setEquation(data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    // console.log(document.getElementById("answer").value);
    if (
      parseFloat(document.getElementById("answer").value) === equation.finalAns
    ) {
      // console.log("RIGHT");
      navigate("/r1");
    } else {
      // console.log("WRONG");
      navigate("/w1", { state: equation });
    }
  };

  return (
    <>
      <Navbar />
      <h2 className="header">
        <b className="text">Polynomial Equation:</b>
      </h2>
      {equation && Object.keys(equation).length !== 0 ? (
        <div className="my-20">
          <form action="/">
            <br />
            <label htmlFor="noofterms" className="my-1 mx-2">
              The Equation to be integrated :{" "}
              <label className="my-1">
                {" "}
                <h5>
                  {equation.question.coefX2}x<sup>2</sup> +{" "}
                  {equation.question.coefX1}x + {equation.question.coefX0}
                </h5>{" "}
              </label>
            </label>
            <br />
            <br />

            <label htmlFor="noofterms" className="my-6 mx-2">
              The Upper Limit is:{" "}
              <label className="my-6">
                {" "}
                <h5> {equation.upperLimit} </h5>{" "}
              </label>
            </label>
            <br />
            <br />

            <label htmlFor="noofterms" className="my-6 mx-2">
              The lower limit is:{" "}
              <label className="my-6">
                {" "}
                <h5> {equation.lowerLimit} </h5>{" "}
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
            <b>Note: Enter the answer upto two decimal places</b>
            <br />
          </form>
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
        </div>
      ) : (
        ""
      )}
    </>
  );
}
