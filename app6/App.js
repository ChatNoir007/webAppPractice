import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [dane, setDane] = useState([]);

  let handleSubmit = e => {
    e.preventDefault()

    fetch("http://localhost:8000/", {
      method: "GET",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({marka: e.target.marka.value, model: e.target.model.value, rocznik: e.target.rocznik.value, kolor: e.target.kolor.value, stan: e.target.stan.value,})
    })
  }

  let getData = async () => {
      let dane = await fetch("http://localhost:8000/");
      let result = await dane.json();
      setDane(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <form onChange={handleSubmit}>
        <label name="id">ID:</label>
        <input type="number" name="id"/> <br></br>
        <label name="marka">Marka:</label>
        <input type="text" name="marka"/> <br></br>
        <label name="model">Model:</label>
        <input type="text" name="model"/> <br></br>
        <label name="rocznik">Rocznik:</label>
        <input type="number" name="rocznik"/> <br></br>
        <label name="kolor">Kolor:</label>
        <input type="text" name="kolor"/> <br></br>
        <label name="stan">Stan:</label>
        <input type="text" name="stan"/> <br></br>
      </form>

      <table>
        <thead>
          <tr>
            <th>Marka</th>
            <th>Model</th>
            <th>Rocznik</th>
            <th>Kolor</th>
            <th>Stan</th>
          </tr>
        </thead>
        <tbody>
          {dane.map((item, index) => (
            <tr key={index}>
              <td>{item.marka}</td>
              <td>{item.model}</td>
              <td>{item.rocznik}</td>
              <td>{item.kolor}</td>
              <td>{item.stan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
