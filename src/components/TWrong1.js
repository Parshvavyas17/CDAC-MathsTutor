import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function TWrong1() {
  const navigator = useNavigate();

  const [upCo1, setUpCo1] = useState(null);
  const handleUpCo1 = (e) => {
    setUpCo1(e.target.value);
  };
  const [upCo2, setUpCo2] = useState(null);
  const handleUpCo2 = (e) => {
    setUpCo2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!upCo1 || !upCo2) {
      alert("Enter all the values!");
      return;
    }

    if (func==-cos && func1==Sin && upCo1 == "-1" && upCo2 == "2") {
      alert("Right Answer")
      
     } 
     else 
     {
      alert("Wrong Answer")
      setUpCo1("");
      setUpCo2("");
      navigator("/tw2");
      
     }
 
  };

  const handleHint = (e) => {
    e.preventDefault();
    navigator("/hint");
  };

  return (
    <>
      <Navbar />
      <header
        style={{
          textAlign: "center",
          whiteSpace: "nowrap",
          display: "inline",
          backgroundColor: "#1F4690",
        }}
      >
        <h1
          style={{
            backgroundColor: "#1F4690",
            minHeight: "75px",
            color: "white",
          }}
        >
          <b>Trigonometric Equation: </b>
        </h1>
      </header>

      {/* <section className='mx-5 my-5' style={{textAlign: 'center', marginLeft: '200px'}}>
        <table style={{borderWidth: '2px', borderColor: 'black', width: '200px', height: '100px'}}> 
>>>>>>> Stashed changes
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


>>>>>>> Stashed changes
            <h3>Integrated Equation: </h3> 
            {/* <h5>-cos x + 2sin x</h5> */}
      <h5 className="my-5 mx-5">
        Substitute Here: 
        <input
          className=""
          style={{ width: "50px", marginLeft: "10px", marginRight: "2px"}}
          type="number"
          name="upCo1"
          value={upCo1}
          onChange={handleUpCo1}
        />
        <form>
       <select name="func" id="func">
        <option val = "Sin">Sin</option>
        <option val = "Cos">cos</option>
        <option val = "Tan">tan</option>
        <option val = "cosec">cosec</option>
        <option val = "sec">sec</option>
        <option val = "cot">cot</option>
        <option val = "-Sin">-Sin</option>
        <option val = "-Cos">-cos</option>
        <option val = "-Tan">-tan</option>
        <option val = "-cosec">-cosec</option>
        <option val = "-sec">-sec</option>
        <option val = "-cot">-cot</option>

        


       </select>
        <input
          className=""
          style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
          type="number"
          name="upCo2"
          value={upCo2}
          onChange={handleUpCo2}
        />
        <select name="func1" id="func1">
        <option val = "Sin">Sin</option>
        <option val = "Cos">cos</option>
        <option val = "Tan">tan</option>
        <option val = "cosec">cosec</option>
        <option val = "sec">sec</option>
        <option val = "cot">cot</option>
        <option val = "-Sin">-Sin</option>
        <option val = "-Cos">-cos</option>
        <option val = "-Tan">-tan</option>
        <option val = "-cosec">-cosec</option>
        <option val = "-sec">-sec</option>
        <option val = "-cot">-cot</option>
         
         </select>
         </form>
     
      </h5>
      <button
        className="btn btn-outline-success my-3 mx-10"
        onClick={handleSubmit}
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
        Submit
      </button>
      
      
     
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Click here for Hint
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Hint - 1 </h5>
        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        The two formulas below need to be considered : 
        <ol>
    <li>  ∫sin x dx = -cos x + C</li>
      <br></br>
     <li> ∫cos x dx = sin x + C</li>
      </ol>
      </div>
      <div class="modal-footer">
     {/*   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>  */}
        <button type="button" class="btn btn-dark"  data-bs-dismiss = "modal">Understood</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
