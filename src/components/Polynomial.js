import React from 'react'

export default function Polynomial() {
  return (
    <>
        <h2 className='header'><b className="text">Polynomial Equation:</b></h2>
        <div className='my-20'>
            <form action="/">
          
               
                <br />
                <label htmlFor="noofterms" className='my-1 mx-2'>
                   The Equation to be integrated : <label className='my-1'> <h5>3x<sup>2</sup> - 2x + 5</h5> </label>
                </label>
                <br/>
                <br/>
                
               
                <label htmlFor="noofterms" className='my-6 mx-2'>
                   The upper limit is : <label className='my-6'> <h5> 2 </h5> </label>
                </label>
                <br/>
                <br/>
                
               
                <label htmlFor="noofterms" className='my-6 mx-2'>
                The lower limit is : <label className='my-6'> <h5> 1 </h5> </label>
                </label>
                <br/>
                <br/>
                <label htmlFor="noofterms" className='my-6 mx-2'>
                    The Area Under the Curve is:  

                </label>
                <input className= "mx-3" style={{width: '50px'}} type="number" />
                <br />
                
                
                
             
            </form>
            <a href="/r1"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '75px'}}>Submit</button></a>
           
        </div>

    </>
  )
}
