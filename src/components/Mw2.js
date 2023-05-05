import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Mw2 = () => {
    const [DisThirdHint, setDisSecHint] = useState(true);
    const [DisFourthHint, setDisThrdHint] = useState(true);
    const enableThirdHint = () => {
      setDisSecHint(false);
    };
  
    const enableFourthHint = () => {
      setDisThrdHint(false);
    };
  
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
            <b>Mixed Type Equation </b>
          </h1>
        </header>
        <section>
          <h4 className="mx-2 my-3">The equation integrated by you in the previous step is incorrect!!</h4>
          <br />
          <h4>Consider the below formula : </h4>
          <h5> ∫ e <sup>x</sup> dx  =  e <sup>x</sup> + c </h5>
         
  <button type="button" class="btn btn-warning" data-bs-toggle="modal"  data-bs-target="#exampleModal">
    Click here for the second Hint
  </button>
  
  
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Hint-2</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
       1. Adjust the Numerator by adding and subtracting 1 from it .
        <br/> 
        Hence , the Numerator becomes e<sup>x</sup>((x+1)-1)
        <br></br>
        2.Open the brackets and multiply e <sup>x</sup> with x+1 and -1 . 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={enableThirdHint}>Understood</button>
     <a href="/tw1"><button type="button" class="btn btn-primary">Try Now</button></a>
        </div>
      </div>
    </div>
  </div>
  <br></br>
  <br></br>
  
  <button type="button" class="btn btn-warning" data-bs-toggle="modal" disabled={DisThirdHint} data-bs-target="#Hint3Modal">
    Click here for the third Hint
  </button>
  
  
  <div class="modal fade" id="Hint3Modal" tabindex="-1" role="dialog" aria-labelledby="Hint3ModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="Hint3ModalLabel">Hint-3</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
      1 . Split the numerator into 2 seperate terms  .
      <br/>
      2 . Now apply Integration by parts in the first term  
         where take u = (x+1)<sup>-1</sup> and v = e <sup></sup>
   

          
  
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"onClick={enableFourthHint}>Understood</button>
     <a href="/tw1"><button type="button" class="btn btn-primary">Try Now</button></a>
        </div>
      </div>
    </div>
  </div>
  
  <br></br>
  <br></br>
  
  <button type="button" class="btn btn-warning" data-bs-toggle="modal" disabled={DisFourthHint} data-bs-target="#Hint4Modal">
    Click here for the fourth Hint
  </button>
  
  
  <div class="modal fade" id="Hint4Modal" tabindex="-1" role="dialog" aria-labelledby="Hint4ModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="Hint4ModalLabel">Hint-4</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
      
        <h4>Consider the below formula for Integral by Parts : </h4>
        <h5>∫u v dx = u∫v dx  - ∫u' (∫v dx) dx </h5>
        Here u' is the derivative of u and v' is the derivative of v.
        <br/>
        <br/>
        After Solving from the above hint , the term inside the integral should get cancelled with the second term obatined after splitting the numerator . 




  
        </div>
        <div class="modal-footer">
      {/*    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Understood</button>  */}
     <a href="/Mw1"><button type="button" class="btn btn-primary">Try Now</button></a>
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
  
}

export default Mw2
