import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function TWrong1() {
  const navigator = useNavigate();
  const options = ["none", "sin", "cos", "tan", "cot", "sec", "cosec"];


  const [trig1, setTrig1] = useState(null);
  // var trig1;
  // var trig2;
  // const handletrig1 = (e) => {
  //   // setTrig1(e.target.value);
  //   var select1 = document.getElementById('func');
  //   var value1 = select1.options[select1.selectedIndex].value;
  //   // setTrig1(value1);
  //   trig1=value1;
  //   // console.log(value1);
  //   console.log(trig1);

  //   // setTrig1(document.getElementById("func").val);
  // }
  const [trig2, setTrig2] = useState(null);
  // const handletrig2 = (e) => {
  //   var select2 = document.getElementById('func1');
  //   var value2 = select2.options[select2.selectedIndex].value;
  //   // setTrig2(value2);
  //   trig2=value2;
  //   // console.log(value2);
  //   console.log(trig2);
  //   // setTrig2(document.getElementById("func1").val);
  // }
  const [upCo1, setUpCo1] = useState(null);
  const handleUpCo1 = (e) => {
    setUpCo1(e.target.value);
  };
  const [upCo2, setUpCo2] = useState(null);
  const handleUpCo2 = (e) => {
    setUpCo2(e.target.value);
  };

  const [upCo3, setUpCo3] = useState(null);
  const handleUpCo3 = (e) => {
    setUpCo3(e.target.value);
  };

    const [upCo4, setUpCo4] = useState(null);
  const handleUpCo4 = (e) => {
    setUpCo4(e.target.value);
  };
  // const [upCo5, setUpCo5] = useState(null);
  // const handleUpCo5 = (e) => {
  //   setUpCo2(e.target.value);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!upCo1 || !upCo2) {
      alert("Enter all the values!");
      return;
    }

    console.log(trig1);
    console.log(trig2);
    if (upCo1=="1" && trig1 == "none" && upCo2=="x" && upCo3=="0.5"&& trig2=="sin" && upCo4=="2x") {
  
      alert("Right Answer")
      navigator("/tr1")
      
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
          type="text"
          name="upCo1"
          value={upCo1}
          onChange={handleUpCo1}
        />

        
       {/* <select name="func" id="func" onChange={handletrig1}>
        <option disbaled selected >Select an option</option> 
        <option value = "none">none</option>
        <option value = "sin">sin</option>
        <option value = "cos">cos</option>
        <option value = "tan">tan</option>
        <option value = "cosec">cosec</option>
        <option value = "sec">sec</option>
        <option value = "cot">cot</option>
        <option value = "-sin">-Sin</option>
        <option value = "-cos">-cos</option>
        <option value = "-tan">-tan</option>
        <option value = "-cosec">-cosec</option>
        <option value = "-sec">-sec</option>
        <option value = "-cot">-cot</option> */}
        <select value={trig1} onChange={(e)=>setTrig1(e.target.value)} >
          <option disabled selected>Select an option</option>
          {options.map((value) => 
          (<option value={value} key = {value}>
            {value}
          </option>  
        ))}
        </select>
        

   
{/* <input
          className=""
          style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
          type="number"
          name="upCo2"
          value={upCo2}
          onChange={handleUpCo2}
        /> */}
     


       {/* </select> */}
        <input
          className=""
          style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
          type="text"
          name="upCo2"
          value={upCo2}
          onChange={handleUpCo2}
        />
              <input
          className=""
          style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
          type="text"
          name="upCo3"
          value={upCo3}
          onChange={handleUpCo3}
        />
        {/* <select name="func1" id="func1" onChange={handletrig2}>
        <option disbaled selected >Select an option</option>
        <option value = "none">none</option>
        <option value = "sin">sin</option>
        <option value = "cos">cos</option>
        <option value = "tan">tan</option>
        <option value = "cosec">cosec</option>
        <option value = "sec">sec</option>
        <option value = "cot">cot</option>
        <option value = "-sin">-sin</option>
        <option value = "-cos">-cos</option>
        <option value = "-tan">-tan</option>
        <option value = "-cosec">-cosec</option>
        <option value = "-sec">-sec</option>
        <option value = "-cot">-cot</option>
         
         </select> */}
         <select value={trig2} onChange={(e)=>setTrig2(e.target.value)} >
         <option disabled selected>Select an option</option>
          {options.map((value) => 
          (<option value={value} key = {value}>
            {value}
          </option>  
        ))}
        </select>
         <input
          className=""
          style={{ width: "50px", marginLeft: "10px", marginRight: "2px" }}
          type="text"
          name="upCo4"
          value={upCo4}
          onChange={handleUpCo4}
        />
   
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
      <b>  Since cos<sup>2</sup>x cannot be directly integrated we need to Use the formula for Expansion of cos x .</b>
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
