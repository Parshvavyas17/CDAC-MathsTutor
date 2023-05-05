import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Lw2 = () => {
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
          <b>Trigonometric Equation: </b>
        </h1>
      </header>
      <section>
        <h4 className="mx-2 my-3">
          The equation integrated by you in the previous step is incorrect!!
        </h4>
        <br />
        <h4>Consider the below formula for Integral by Parts : </h4>
        <h5>∫u v dx = u∫v dx - ∫u' (∫v dx) dx </h5>

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
                Use the modified formula of Integration by parts :<br></br>
                ∫u dv = uv - ∫v du ... where u = ln (2x)
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
                <a href="/lw1">
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
                Let u = ln(2x)
                <br></br>
                Find du/dx for substituting in place of du in the formula stated
                in Hint-2.
                <br></br>
                <b> Note : du/dx is the derivative of the above equation . </b>
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
                <ol>
                  <li>
                    According to the above formula stated in Hint-1 , dv = 1 dx
                    Now to get the value of v , we need to integrate on both
                    sides . This would give us v = x .<br></br>
                    <b> (∫u dv = ∫1 dx)</b>
                  </li>

                  <li>
                    Now we have the values of u = ln(2x) v = x and du = 2/2x dx{" "}
                  </li>
                  <li>
                    Now substitute these values in the above integration by
                    parts formula seen in Hint-2
                  </li>
                </ol>
              </div>
              <div class="modal-footer">
                {/*    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Understood</button>  */}
                <a href="/lw1">
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

export default Lw2;
