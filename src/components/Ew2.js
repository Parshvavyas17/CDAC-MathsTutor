import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Ew2 = () => {
  const location = useLocation();
  const equation = location.state;
  const [DisThirdHint, setDisSecHint] = useState(true);
  const [DisFourthHint, setDisThrdHint] = useState(true);

  const enableThirdHint = () => {
    setDisSecHint(false);
  };

  const enableFourthHint = () => {
    setDisThrdHint(false);
  };

  console.log(equation);

  return (
    <>
      <Navbar />
      <header
        style={{ textAlign: "center", whiteSpace: "nowrap", display: "inline" }}
      >
        <h1
          style={{
            backgroundColor: "#1F4690 ",
            minHeight: "75px",
            color: "white",
          }}
        >
          <b>Exponential Equation </b>
        </h1>
      </header>
      <section>
        <h4 className="mx-2 my-3">
          The equation integrated by you in the previous step is incorrect!!
        </h4>
        <br />
        <h4>Consider the below formula : </h4>
        <h5>
          {" "}
          ∫ e <sup>x</sup> dx = e <sup>x</sup> + c{" "}
        </h5>

        <button
          type="button"
          class="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Click here for the second Hint
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Hint-2
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Let 1+e<sup>x</sup> = u<br></br>
                Hence , du = e <sup>x</sup>dx
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={enableThirdHint}
                >
                  Understood
                </button>
                <a href="/tw1">
                  <button type="button" class="btn btn-primary">
                    Try Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        <button
          type="button"
          class="btn btn-warning"
          data-bs-toggle="modal"
          disabled={DisThirdHint}
          data-bs-target="#Hint3Modal"
        >
          Click here for the third Hint
        </button>

        <div
          class="modal fade"
          id="Hint3Modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="Hint3ModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="Hint3ModalLabel">
                  Hint-3
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Apply the below formula
                <br></br>
                <b>
                  {" "}
                  ∫ x<sup>n</sup> dx = x<sup>n+1</sup>/n+1{" "}
                </b>
                where in this case n = 1/2
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={enableFourthHint}
                >
                  Understood
                </button>
                <a href="/tw1">
                  <button type="button" class="btn btn-primary">
                    Try Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>

        <button
          type="button"
          class="btn btn-warning"
          data-bs-toggle="modal"
          disabled={DisFourthHint}
          data-bs-target="#Hint4Modal"
        >
          Click here for the fourth Hint
        </button>

        <div
          class="modal fade"
          id="Hint4Modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="Hint4ModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="Hint4ModalLabel">
                  Hint-4
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Now resubstitute u with 1+e<sup>x</sup>
              </div>
              <div class="modal-footer">
                {/*    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Understood</button>  */}
                <a href="/tw1">
                  <button type="button" class="btn btn-primary">
                    Try Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <br></br>

        <a href="/trigo">
          <button
            className="btn btn-outline-success my-3 mx-10"
            style={{
              height: "75px",
              width: "100px",
              borderRadius: "50%",
              textAlign: "center",
              marginLeft: "25px",
              backgroundColor: "#548CFF",
              border: "1px solid black",
              color: "white",
            }}
          >
            Try Again
          </button>
        </a>
      </section>
    </>
  );
};

export default Ew2;
