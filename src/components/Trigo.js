import React from 'react'

export default function Trigo() {
  return (
    <>
    <header style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline'}}>
          <h1 class="my-3 mx-2"><b>Trigonometric Equation: </b></h1>
          <hr />
    </header>
    <section className='mx-5 my-5' style={{textAlign: 'center', marginLeft: '200px'}}>
        <table style={{borderWidth: '2px', borderColor: 'black', width: '200px', height: '100px'}}> 
            <tr style={{borderWidth: '2px', borderColor: 'black'}}>
                <td style={{borderWidth: '2px', borderColor: 'black'}}>sin</td>
                <td style={{borderWidth: '2px', borderColor: 'black'}}>cos</td>
                <td style={{borderWidth: '2px', borderColor: 'black'}}>tan</td>
            </tr>
            <tr style={{borderWidth: '2px', borderColor: 'black'}}>
                <td style={{borderWidth: '2px', borderColor: 'black'}}>cosec</td>
                <td style={{borderWidth: '2px', borderColor: 'black'}}>sec</td>
                <td style={{borderWidth: '2px', borderColor: 'black'}}>cot</td>
            </tr>
        </table>
    </section>
    <section>
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
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup>
                +
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
                <sup><input type="number" style={{width: '40px'}}/></sup>
                +
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" />
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
            <a href="/tw1"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '75px'}}>Wrong</button></a>

    </section>
      
    </>
  )
}
