import React from 'react'
import ReactDOM from 'react-dom/client';


export default function WrongP3() {
  return (
    <>
        <header style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline'}}>
        <h2 className='header'><b className="text">Polynomial Equation:</b></h2>
        </header>
        <section>
            <h4 className='my-5 mx-5'>The integrted Equation entered by you in the previous step is incorrect</h4>
            <h5 className='my-5 mx-12'>
              <h3>
                Consider the Formulas given below: 
                </h3>
                <br />
                <ol start="A">

              <li> ∫(f(x) + g(x)) dx = ∫ f(x) dx  +  ∫ g(x) dx </li> 
                <br />
              <li> ∫ x<sup>n</sup> dx = x<sup>n+1</sup>/n+1 </li> 
                </ol>
            </h5>

            <h3 className='my-1 mx-5'>
 To integrate the equation the following steps need to be followed :  
              </h3>

              <ol textAlign="center" start="1">
                <p><b>Step 1</b> : The equation to be integrted should be divided into the number of terms in the equation and each sub equation should be integrated seperately  </p>

              <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Click here for First Hint
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Hint-1</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      In the the first sub-equation , 3 (which is a constant) should be taken out of the integral.
     <br/> <b>Eg - </b> ∫cf(x) dx	= c∫f(x) dx ... here c is the constant.
          </div>
      <div class="modal-footer">
      <a href='/w1'>  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Try Now</button> </a> 

        <button type="button" onClick={'exampleModalCenter'}  class="btn btn-dark" data-bs-dismiss="modal">Understood</button>
      </div>
    </div>
  </div>
</div>

<br></br>
  
</ol>    

<button type="button" className="btn btn-warning  mx-5" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
  Click here for Second Hint
</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Hint-2</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div class="modal-body">
     
 Now use the formula number 2 as stated above for the term which is in coeff <sup>power</sup> format inside the integral.


      </div>
      <div class="modal-footer">
       {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"></button> */}
       <a href='/w1'>  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Try Now</button> </a> 
        <button type="button" class="btn btn-dark">Understood</button>
      </div>
    </div>
  </div>
</div>


          
        </section>
        <br></br>
       
        <button type="button" className="btn btn-warning my-1 mx-5"  data-bs-toggle="modal" data-bs-target=".bd-example-modal-lg">Click here for Final Hint</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
   <b> In this case the sub-equation to be integrated is x<sup>2</sup> where the value of n is substituted as 2 in the formula number 2 as stated above</b>
 {/*   <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Try Now</button>  */}
 <br></br>

    <a href='/w1'><button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button></a>

    </div>
  </div>
</div>
<br></br>

        <a href="/w2"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '200px',borderRadius: '50%', textAlign: 'center', marginLeft: '1200px'}}>Next</button></a>
       

      
    </>
  )
}
