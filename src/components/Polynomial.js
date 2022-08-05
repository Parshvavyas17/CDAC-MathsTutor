import React from 'react'

export default function Polynomial() {
  return (
    <>
        <div style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline'}}>
          <h1 class="my-3 mx-2"><b>Polynomial Equation: </b></h1>
          <hr />
        </div>
        <div className='my-20'>
            <form action="/">
                <label htmlFor="noofterms" className='my-3 mx-2'>
                    Enter the number of terms: 
                </label>
                <input className= "mx-5" style={{width: '50px'}} type="number" />
                <br />
                <label htmlFor="noofterms" className='my-3 mx-2'>
                    Enter the Equation: 
                </label>
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup>
                +
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup>
                +
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup>
                <br />
                <label htmlFor="noofterms" className='my-3 mx-2'>
                    Enter the Upper Limit: 
                </label>
                <input className= "mx-5" style={{width: '50px'}} type="number" />
                <br />
                <label htmlFor="noofterms" className='my-3 mx-2'>
                    Enter the Lower Limit: 
                </label>
                <input className= "mx-5" style={{width: '50px'}} type="number" />
                <br />
                <label htmlFor="noofterms" className='my-3 mx-2'>
                    The Area Under the Curve is:  
                </label>
                <input className= "mx-5" style={{width: '50px'}} type="number" />
                <br />
            </form>
            <a href="/r1"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '75px'}}>Right</button></a>
            <a href="/w1"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '75px'}}>Wrong</button></a>
        </div>

    </>
  )
}
