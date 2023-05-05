import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Trigo() {
  const [route, setRoute] = useState("");
  const handleClick = () => {
    if (document.getElementById("answer").value === "1.57") {
      setRoute("/tr1");
    } else {
      alert("Wrong Answer")
      setRoute("/tw1");
    }
  };

  return (
    <>
      <Navbar />
      <header
        style={{
          textAlign: "center",
          whiteSpace: "nowrap",
          display: "inline",
          padding: "0px",
        }}
      >
        <h1
          style={{
            backgroundColor: "#1F4690",
            color: "white",
            minHeight: "75px",
          }}
        >
          <b>Trigonometric Equation: </b>
        </h1>
      </header>
      {/*  <section className='mx-5 my-5' style={{textAlign: 'center', marginLeft: '200px'}}>
=======
    {/* <section className='mx-5 my-5' style={{textAlign: 'center', marginLeft: '200px'}}>

        <table style={{borderWidth: '2px', borderColor: 'black', width: '200px', height: '100px'}}> 
            <tr style={{borderWidth: '2px', borderColor: 'black'}}>
                <td style={{borderWidth: '2px', borderColor: 'black'}}>sin</td>
                <td style={{borderWidth: '2px', borderColor: 'black'}}>cos</td>
                <td style={{borderWidth: '2px', borderColor: 'black'}}>tan</td>
            </tr>
            <tr style={{borderWidth: '2px', borderColor: 'black'}}>
                <td style={{borderWidth: '2px', borderColor: 'black'}}>cosec</td>
                <td style={{borderWidth: '2px', borderColor: 'black'}}>sec</td>
                <td style={{borderWidth: '2px', borderColor: 'black'}}>cot</td>
            </tr>
        </table>
<
=======
    </section> */}
      <section>
        <form action="/">
          <label htmlFor="noofterms" className="my-3 mx-2"></label>
          {/* <input className= "mx-5" style={{width: '50px'}} type="number" /> */}
          <br />
          <label htmlFor="noofterms" className="my-3 mx-2">
            The Equation to be integrated is :
          </label>
          {/* <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup>
                +
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup>
                +
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup> */}
           2cos <sup>2</sup>x + sec <sup>2</sup>x
          <br />
          <label htmlFor="noofterms" className="my-3 mx-2">
            The Upper Limit is :
          </label>
          {/* <input className= "mx-5" style={{width: '50px'}} type="number" /> */}
          {Math.PI/2}
          <br />
          <label htmlFor="noofterms" className="my-3 mx-2">
            The lower limit is : 0
          </label>
          {/* <input className= "mx-5" style={{width: '50px'}} type="number" /> */}
          
          
          <br />
          <label htmlFor="noofterms" className="my-3 mx-2">
            The Area Under the Curve is:
          </label>
          <input
            className="mx-5"
            style={{ width: "50px" }}
            type="number"
            id="answer"
          />
          <b> Note: Enter the answer upto two decimal places </b>
          <br />
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
              backgroundColor: "#548CFF",
              color: "white",
              border: "1px solid black",
            }}
          >
            Submit
          </button>
        </a>
        {/* <a href="/tw1"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '75px',backgroundColor:'#548CFF',color:'white',border:'1px solid black'}}>Wrong</button></a> */}
      </section>
    </>
  );
}
