import './App.css';
import React, { useRef, useState } from 'react';

function App() {
  const [weight , setWeight] = useState()
  const [height, setHeight] = useState()
  const [bmi , setBmi] = useState("")
  const [message , setMessage] = useState("")


  let calcBmi = (event)=>{
    event.preventDefault()



    if(weight === 0 , height === 0){
      alert("Please enter valid height and weight")
    }
    else{
      let bmi = (weight / (height * height) * 703 )
      setBmi(bmi.toFixed(1))



      if(bmi < 25) {
        setMessage("You are underweight")
      }
      else if (bmi >= 25 || bmi < 30){
        setMessage("You are healthy weight")
      }
      else{
        setMessage("You are overweight")
      }
    }
  }


  let reload =()=>{
    // window.location.reload()
    setBmi("")
    setWeight("")
    setHeight("")
    setMessage("Please enter value")

  }




  return (
    <div className="App">
      <div className="container">
        <h2 className='center'>BMI Calculator</h2>

        <form action="" onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={(e)=>setWeight(e.target.value)} />
          </div>

          <div>
            <label>Height (in)</label>
            <input value={height} onChange={(e)=>setHeight(e.target.value)} />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
           
          </div>
        </form>
        
        <button className='btn btn outline'  onClick={reload}>Reload</button>


        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

      </div>
    </div>
  );
}

export default App;
