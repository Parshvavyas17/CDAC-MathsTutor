import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function TWrong1() {
  const navigator = useNavigate();

  const [ upCo1, setUpCo1 ] = useState(null);
  const handleUpCo1 = (e) => {
      setUpCo1(e.target.value);
  }
  const [ upCo2, setUpCo2 ] = useState(null);
  const handleUpCo2 = (e) => {
      setUpCo2(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
      if(!upCo1 || !upCo2) {
          alert('Enter all the values!');
          return;
      }
      console.log(upCo1, upCo2);
      if(upCo1 === "-1" && upCo2 === "2") {
          alert('Right Answer!!!');
          navigator('/tr1');
      }
      else {
          alert('Wrong Answer!!!');
          setUpCo1("");
          setUpCo2("");
          navigator('/tw2');
      }
  }

  const handleHint = (e) => {
    e.preventDefault();
    navigator('/hint');
  }

  return (
    <>
     <header style={{textAlign: 'center',  whiteSpace: "nowrap", display: 'inline',backgroundColor:'#1F4690'}}>
          <h1 style={{backgroundColor:'#1F4690' , minHeight:'75px',color:'white'}} ><b>Trigonometric Equation: </b></h1>
         
    </header>
<<<<<<< Updated upstream
    <section className='mx-5 my-5' style={{textAlign: 'center', marginLeft: '200px'}}>
    
    </section>
    <section className='my-5 mx-4'>
            <h3>Your Equation: </h3> 
            <h5>sin x + 2cos x</h5>
            <br></br>
            <table style={{borderWidth: '2px', borderColor: 'black', width: '200px', height: '100px'}}> 
=======
    {/* <section className='mx-5 my-5' style={{textAlign: 'center', marginLeft: '200px'}}>
        <table style={{borderWidth: '2px', borderColor: 'black', width: '200px', height: '100px'}}> 
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <br></br>
=======
    </section> */}
    <section className='my-5 mx-4'>
            <h3>Your Equation: </h3> 
            <h5>sin x + 2cos x</h5>

>>>>>>> Stashed changes
            <h3>Integrated Equation: </h3> 
            {/* <h5>-cos x + 2sin x</h5> */}
            <h5 className='my-5 mx-5'>
                Substitute Here: 
                (
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" name='upCo1' value={upCo1} onChange={handleUpCo1} />
                cos x
                +
                <input className= "" style={{width: '50px',marginLeft: '10px', marginRight: '2px'}} type="number" name='upCo2' value={upCo2} onChange={handleUpCo2} />
                sin x
                )
            </h5>
            <button className='btn btn-outline-success my-3 mx-10'onClick={handleSubmit}  style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '25px',backgroundColor:'#548CFF',border:'1px solid black',color:'white'}}>Submit</button>
            <button className='btn btn-outline-success my-3 mx-10' onClick={handleHint} style={{height: '75px', width: '100px',borderRadius: '50%', textAlign: 'center', marginLeft: '25px',backgroundColor:'#548CFF',border:'1px solid black',color:'white'}}>View Hint</button>
    </section>
      
    </>
  )
}
