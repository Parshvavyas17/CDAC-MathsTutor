import React from 'react'

export default function Page2() {
  return (
    <>
      <h2 style={{textAlign: 'center'}} className="my-3"><b>Area under the Curve</b></h2>
      <hr style={{height: '2px', color: 'black'}} className='my-3'/>
      <div className='my-5 mx-3' style={{textAlign: 'center'}}>
          <h4>Select the type of Integration Equation: </h4>
          <div className='mx-5'>
              <a href="/Polynomial"><button className='btn btn-outline-dark btn-lg my-3' style={{width: '250px'}}>Polynomial Equation</button></a><br />
              <a href="/trigo"><button className='btn btn-outline-dark btn-lg my-3' style={{width: '250px'}}>Trigonometric Equation</button></a><br />
              <button className='btn btn-outline-dark btn-lg my-3' style={{width: '250px'}}>Logarithmic Equation</button><br />
              <button class='btn btn-outline-dark btn-lg my-3' style={{width: '250px'}}>Exponential Equation</button><br />
          </div>
      </div>
    </>
  )
}
