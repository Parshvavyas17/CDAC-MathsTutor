import React from 'react'

export default function Identity() {
  return (
    <>
    <header style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline'}}>
          <h1 class="my-3 mx-2"><b>Trigonometric Equation: </b></h1>
          <hr />
    </header>
    <section>
        <h3 className='my-5'>
            Identity: <br />
            cos<sup>2</sup>x = ((1+cos 2x)/2)
        </h3>
        <h3 className='my-5'>
            Hence, <br />
            2 cos<sup>2</sup>x = 1+cos 2x
        </h3>
        <h3 className='my-5'>
            Now After Substituting we Integrated 1+cos 2x
        </h3>
        <a href="/tw2"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '25px'}}>Next</button></a>
    </section>
      
    </>
  )
}
