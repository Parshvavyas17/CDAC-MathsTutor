import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useLocation } from "react-router-dom";

export default function WrongP3() {
  const [DisSecHint, setDisSecHint] = useState(true);
  const [DisThrdHint, setDisThrdHint] = useState(true);
  const navigator = useNavigate();
  const location = useLocation();
  const equation = location.state;

  const enableSecondHint = () => {
    setDisSecHint(false);
  };

  const enableThirdHint = () => {
    setDisThrdHint(false);
  };

  const navigateRetry = () => {
    navigator("/w1", { state: equation });
  };

  console.log(equation);

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
        <h4 className="my-5 mx-5">
          The integrated Equation entered by you in the previous step is
          incorrect
        </h4>
        <h5 className="my-5 mx-12">
          <p>Consider the Formulas given below:</p>
          <br />
          <ol start="A">
            <li> ∫(f(x) + g(x)) dx = ∫ f(x) dx + ∫ g(x) dx </li>
            <br />
            <li>
              {" "}
              ∫ x<sup>n</sup> dx = x<sup>n+1</sup>/n+1{" "}
            </li>
          </ol>
        </h5>

        <h3 className=" mx-2">
          To integrate the equation the following steps need to be followed :
        </h3>

        <ol textalign="center" start="1">
          <p>
            <b>Step 1</b> : The equation to be integrted should be divided into
            the number of terms in the equation and each sub equation should be
            integrated seperately{" "}
          </p>

          <button
            type="button"
            className="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Click here for First Hint
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
                    Hint-1
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  In the the first sub-equation , 3 (which is a constant) should
                  be taken out of the integral.
                  <br /> <b>Eg - </b> ∫cf(x) dx = c∫f(x) dx ... here c is the
                  constant.
                </div>
                <div className="modal-footer">
                  {/* <a href="/w1"> */}{" "}
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={navigateRetry}
                  >
                    Try Now
                  </button>{" "}
                  {/* </a> */}
                  <button
                    type="button"
                    onClick={enableSecondHint}
                    className="btn btn-dark"
                    data-bs-dismiss="modal"
                  >
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>

          <br></br>
        </ol>

        <button
          type="button"
          className="btn btn-warning my-2 mx-5"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
          disabled={DisSecHint}
        >
          Click here for Second Hint
        </button>

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Hint-2
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Now use the formula number 2 as stated above for the term which
                is in coeff <sup>power</sup> format inside the integral.
              </div>
              <div className="modal-footer">
                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"></button> */}
                {/* <a href="/w1"> */}{" "}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={navigateRetry}
                >
                  Try Now
                </button>{" "}
                {/* </a> */}
                <button
                  type="button"
                  className="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalCenter"
                  onClick={enableThirdHint}
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>

      <button
        type="button"
        className="btn btn-warning my-1 mx-5"
        data-bs-toggle="modal"
        data-bs-target=".bd-example-modal-lg"
        disabled={DisThrdHint}
      >
        Click here for Final Hint
      </button>

      <div
        className="modal fade bd-example-modal-lg"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <b>
              {" "}
              In this case the sub-equation to be integrated is x<sup>
                2
              </sup>{" "}
              where the value of n is substituted as 2 in the formula number 2
              as stated above
            </b>
            {/*   <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Try Now</button>  */}
            <br></br>

            {/* <a href="/w1"> */}
            <button
              type="button"
              className="btn btn-dark btn-lg btn-block"
              onClick={navigateRetry}
            >
              Understood
            </button>
            {/* </a> */}
          </div>
        </div>
      </div>
      <br></br>

      {/* <a href="/w2">
        <button
          className="btn btn-outline-success"
          style={{
            height: "75px",
            width: "200px",
            borderRadius: "50%",
            textAlign: "center",
            marginLeft: "1100px",
          }}
        >
          Next
        </button>
      </a> */}
    </>
  );
}
