import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WrongP1() {
  const navigator = useNavigate();
    const [ upCo1, setUpCo1 ] = useState(null);
    const handleUpCo1 = (e) => {
        setUpCo1(e.target.value);
    }
    const [ upCo2, setUpCo2 ] = useState(null);
    const handleUpCo2 = (e) => {
        setUpCo2(e.target.value);
    }
    const [ upCo3, setUpCo3 ] = useState(null);
    const handleUpCo3 = (e) => {
        setUpCo3(e.target.value);
    }
    const [ upPo1, setUpPo1 ] = useState(null);
    const handleUpPo1 = (e) => {
        setUpPo1(e.target.value);
    }
    const [ upPo2, setUpPo2 ] = useState(null);
    const handleUpPo2 = (e) => {
        setUpPo2(e.target.value);
    }
    const [ upPo3, setUpPo3 ] = useState(null);
    const handleUpPo3 = (e) => {
        setUpPo3(e.target.value);
    }
    // const [ loCo1, setLoCo1 ] = useState(null);
    // const handleLoCo1 = (e) => {
    //     setLoCo1(e.target.value);
    // }
    // const [ loCo2, setLoCo2 ] = useState(null);
    // const handleLoCo2 = (e) => {
    //     setLoCo2(e.target.value);
    // }
    // const [ loCo3, setLoCo3 ] = useState(null);
    // const handleLoCo3 = (e) => {
    //     setLoCo3(e.target.value);
    // }
    // const [ loPo1, setLoPo1 ] = useState(null);
    // const handleLoPo1 = (e) => {
    //     setLoPo1(e.target.value);
    // }
    // const [ loPo2, setLoPo2 ] = useState(null);
    // const handleLoPo2 = (e) => {
    //     setLoPo2(e.target.value);
    // }
    // const [ loPo3, setLoPo3 ] = useState(null);
    // const handleLoPo3 = (e) => {
    //     setLoPo3(e.target.value);
    // }

    const handleSubmit = (e) => {
        if(!upCo1 || !upCo2 || !upCo3 || !upPo1 || !upPo2 || !upPo3) {
            alert('Enter all the values!');
            return;
        }
        console.log(upCo1, upCo2, upCo3, upPo1, upPo2, upPo3);
        if(upCo1 == 1 && upPo1 == 3 &&  upCo2 == 1 && upPo2 == 2 && upCo3 == 5 && upPo3 == 1) {
            alert('Right Answer!!!');
            navigator('/r1');
        }
        else {
            alert('Wrong Answer!!!');
            setUpCo1(null);
            setUpPo1(null);
            setUpCo2(null);
            setUpPo2(null);
            setUpCo3(null);
            setUpPo3(null);
            // setLoCo1(null);
            // setLoPo1(null);
            // setLoCo2(null);
            // setLoPo2(null);
            // setLoCo3(null);
            // setLoPo3(null);
            navigator('/w3');
        }
    }
    
  return (
    <>
        <header style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline'}}>
        <h2 className='header'><b className="text">Polynomial Equation:</b></h2>
        </header>
        <section className='my-5 mx-4'>
            <h3>Your Equation: </h3> 
            <h5>3x<sup>2</sup> - 2x + 5</h5>

            <h3>Integrated Equation: </h3> 

            (
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px', marginTop: '8px'}} type="number" name='upCo1' value={upCo1} onChange={handleUpCo1} />
                <sup><input type="number" style={{width: '40px'}} name='upPo1' value={upPo1} onChange={handleUpPo1} /></sup>
                +
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" name='upCo2' value={upCo2} onChange={handleUpCo2} />
                <sup><input type="number" style={{width: '40px'}} name='upPo2' value={upPo2} onChange={handleUpPo2} /></sup>
                +
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" name='upCo3' value={upCo3} onChange={handleUpCo3} />
                <sup><input type="number" style={{width: '40px'}} name='upPo3' value={upPo3} onChange={handleUpPo3} /></sup>)
                -
                <br />
                <button className='btn btn-outline-success my-3 mx-10' style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginTop: '5px'}} onClick={handleSubmit} >Submit</button>
                <br />

        </section>
      
    </>
  )
}
