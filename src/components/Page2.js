import React from 'react'
import './page2.css'

export default function Page2() {
  return (
    <>
      <h2 className='header'><b className="text">Area under the Curve</b></h2>
      <div className='my-5 mx-3' style={{textAlign: 'center'}}>
          <h4>Select the type of Integration Equation: </h4>
          <div className='mx-5'>
              <a href="/Polynomial"><button className='btn btn-primary btn-lg my-3' style={{width: '250px'}}>Polynomial Equation</button></a><br />
              <a href="/trigo"><button className='btn btn-primary btn-lg my-3' style={{width: '250px'}}>Trigonometric Equation</button></a><br />
              <a href='/loga'><button className='btn btn-primary btn-lg my-3' style={{width: '250px'}}>Logarithmic Equation</button></a><br />
              <button className='btn btn-primary btn-lg my-3' style={{width: '250px'}}>Exponential Equation</button><br />
          </div>
      </div>
    </>
  )
}
