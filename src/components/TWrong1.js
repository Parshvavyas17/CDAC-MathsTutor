import React from 'react'

export default function TWrong1() {
  return (
    <>
     <header style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline',backgroundColor:'#1F4690'}}>
          <h1 style={{backgroundColor:'#1F4690' , minHeight:'75px',color:'white'}} ><b>Trigonometric Equation: </b></h1>
         
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
            <h5>sin x + 2cos x</h5>

            <h3>Integrated Equation: </h3> 
            <h5>-cos x + 2sin x</h5>
            <a href="/r1"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '25px',backgroundColor:'#548CFF',border:'1px solid black',color:'white'}}>Submit</button></a>
            <a href="/hint"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '25px',backgroundColor:'#548CFF',border:'1px solid black',color:'white'}}>View Hint</button></a>
    </section>
      
    </>
  )
}
