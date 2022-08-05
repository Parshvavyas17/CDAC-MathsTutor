import React from 'react'

export default function WrongP3() {
  return (
    <>
        <header style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline'}}>
          <h1 class="my-3 mx-2"><b>Polynomial Equation: </b></h1>
          <hr />
        </header>
        <section>
            <h4 className='my-5 mx-5'>Integrated Equation is incorrect</h4>
            <h5 className='my-5 mx-5'>
                Consider the Formulas given below: 
                <br />
                ∫(f(x) + g(x)) dx = ∫ f(x) dx  +  ∫ g(x) dx
                <br />
                ∫ x<sup>n</sup> dx = x<sup>n+1</sup>/n+1
            </h5>

            <h6 className='my-5 mx-5'>
                Here , when you integrate 3x , the coefficient 3 should be taken out of the 
                integral and the first formula as stated above will be applied by 
                substituting n=2.
            </h6>
        </section>
        <a href="/Polynomial"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '75px'}}>Try Again</button></a>
       

      
    </>
  )
}
