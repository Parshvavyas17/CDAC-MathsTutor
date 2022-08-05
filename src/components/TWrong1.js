import React from 'react'

export default function TWrong1() {
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
    <section className='my-5 mx-4'>
            <h3>Your Equation: </h3> 
            <h5>2cos<sup>2</sup>x</h5>

            <h3>Integrated Equation: </h3> 
            <h5>x+sinxcosx</h5>
            <a href="/r1"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '25px'}}>Submit</button></a>
            <a href="/hint"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '25px'}}>View Hint</button></a>
    </section>
      
    </>
  )
}
