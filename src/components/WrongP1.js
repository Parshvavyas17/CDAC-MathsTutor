import React from 'react'

export default function WrongP1() {
  return (
    <>
        <header style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline'}}>
        <h2 className='header'><b className="text">Polynomial Equation:</b></h2>
        </header>
        <section className='my-5 mx-4'>
            <h3>Your Equation: </h3> 
            <h5>3x<sup>2</sup> - 2x + 5</h5>

            <h3>Integrated Equation: </h3> 
            <h5>x<sup>3</sup> - x<sup>2</sup> + 5x</h5>
            <a href="/w2"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '25px'}}>Next</button></a>
        </section>
      
    </>
  )
}
