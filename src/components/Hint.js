import React from 'react'

export default function Hint() {
  return (
    <>
    <header style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline'}}>
      <h2 className='header'><b className="text">Trigonometric Equation:</b></h2>
    </header>
    <section className='my-5 mx-4'>
            <h3>Your Equation: </h3> 
            <h5>sin x + 2cos x</h5>
            <h4>Hint:   Use the identity of cos   x   for simplification.</h4>
            <a href="/tw2"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '25px',backgroundColor:'#548CFF',color:'white'}}>View Identity</button></a>
    </section>

      
    </>
  )
}
