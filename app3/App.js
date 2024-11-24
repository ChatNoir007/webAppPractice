import './App.css';
import { useState } from 'react'

function App() {
  const [dane, setDane] = useState("")

  let handleSubmit = e => {
    e.preventDefault()

    fetch("http://localhost:8000/dane", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({dane: e.target.test.value})
    })
  }

  let getData = async () => {
    let dane = await fetch("http://localhost:8000/dane")
    let result = await dane.json()
    setDane(`Pobrane dane: \n 1. ${result.tekst1} \n 2. ${result.tekst2}`)
  }
  
  return (
    <div className="App">
      <p>{dane}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="test"/> <br></br>
        <input type="submit"/> <button onClick={getData}>Pobierz dane</button>
      </form>
    </div>
  );
}

export default App;