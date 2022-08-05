import React from 'react'

export default function Hint() {
  return (
    <>
    <header style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline'}}>
          <h1 class="my-3 mx-2"><b>Trigonometric Equation: </b></h1>
          <hr />
    </header>
    <section className='my-5 mx-4'>
            <h3>Your Equation: </h3> 
            <h5>2cos<sup>2</sup>x</h5>
            <h4>Hint:   Use the identity of cos   x   for simplification.</h4>
            <a href="/identity"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '25px'}}>View Identity</button></a>
    </section>

      
    </>
  )
}
