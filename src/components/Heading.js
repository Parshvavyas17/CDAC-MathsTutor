import React from 'react';
// import {Link} from 'react-router-dom';

export default function Heading() {
    const m =
    {
            borderLeft: '2px solid black',
            height: '100%',
            position: 'absolute',
            left: '75%',
            display: 'inline'
    };
  return (
    <>
      <div style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline'}}>
          {/* <img style={{height: '5%', width: '5%'}}src="https://image.shutterstock.com/image-vector/school-math-teacher-pointer-blackboard-260nw-1772128628.jpg" alt="Maths tutor" /> */}
          <h1 class="my-3 mx-2"><b>Online Maths Tutor </b></h1>
      </div>
      <div style={m}></div>
      <hr />
      <h2 style={{textAlign: 'center'}}><b>Application of Definite Integral</b></h2>
      {/* <img style={{display: 'inline', height: '25%', width: '25%'}}src="https://www.adda247.com/jobs/wp-content/uploads/sites/2/2022/04/02164354/integration-formulas.png" alt="" /> */}
      <div style={{display: 'inline'}}>
      <a style={{color: 'black', textDecoration: 'none'}}href="Page1" > <button  style={{display: 'inline', marginRight: '4px', marginLeft: '1010px',height: '100px',width: '200px', borderRadius: '50%'}} class="btn btn-outline-success my-3" type="submit">Log In </button></a>
      <br />
      <a style={{color: 'black', textDecoration: 'none'}}href="Page1" ><button  style={{display: 'inline', marginRight: '4px', marginLeft: '1010px',height: '100px',width: '200px', borderRadius: '50%'}} class="btn btn-outline-success my-3" type="submit">Sign Up</button></a>
      </div>
    </>
  )
}
