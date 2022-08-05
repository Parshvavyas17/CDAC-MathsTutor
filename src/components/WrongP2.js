import React from 'react'

export default function WrongP2() {
  return (
    <>
        <header style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline'}}>
          <h1 class="my-3 mx-2"><b>Polynomial Equation: </b></h1>
          <hr />
        </header>
        <section>
            <h5 className='my-5 mx-5'>
                Substitute the values of a and b (values of limits):
                <sup>b</sup><sub>a</sub>∫ f(x)dx=F(b)-F(a)   
            </h5>
            <h5 className='my-5 mx-5'>
                In this case f(x) =  3x <sup>2</sup> -2x+5 and b (upperlimit) = 2 and a (lowerlimit)=1
            </h5>
            <h5 className='my-5 mx-5'>
                Substitute Here: 
                (
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup>
                +
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup>
                +
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup>)
                -
                (
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup>
                +
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup>
                +
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup>)

                <br />
            </h5>
            <a href="/r1"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '75px'}}>Right</button></a>
            <a href="/w3"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '75px'}}>Wrong</button></a>
       

        </section>
      
    </>
  )
}
