import './App.css';
import { useState } from 'react'

function App() {
  const [dane, setDane] = useState("")

  let handleSubmit = e => {
    e.preventDefault()

    fetch("http://localhost:8000/dane", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({weight: e.target.weight.value, height: e.target.height.value})
    })
  }

  let getData = async () => {
    let dane = await fetch("http://localhost:8000/dane")
    let bmi =
    let result = await dane.json()
    setDane(`BMI: ${result.bmi}`)
  }
  
  return (
    <div className="App">
      <p>BMI: {weight}/{height}*{height} = {bmi}</p>
      <form onSubmit={handleSubmit}>
        <input type="number" name="weight"/> <br></br>
        <input type="number" name="height"/> <br></br>
        <input type="submit"/> <button onClick={getData}>Pobierz dane</button>
      </form>
    </div>
  );
}

export default App;