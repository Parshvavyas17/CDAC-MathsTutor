import React from 'react'

export default function TWrong2() {
  return (
    <>
        <header style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline'}}>
          <h1 class="my-3 mx-2"><b>Trigonometric Equation: </b></h1>
          <hr />
        </header>
        <section>
            <h4 className='mx-5 my-3'> 
                Consider the Formulas:
            </h4>
                <br />
            <h4 className='mx-5 my-3'>
                ∫cos 2x dx = sin 2x / 2 + C
            </h4>
                <br />
            <h4 className='mx-5 my-3'>
                and
            </h4>
                <br />
            <h4 className='mx-5 my-3'>
                ∫(f(x) + g(x)) dx = ∫ f(x) dx  +  ∫ g(x) dx
            </h4>
            <a href="/trigo"><button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '25px'}}>Try Again</button></a>
 
        </section>
    </>
  )
}
