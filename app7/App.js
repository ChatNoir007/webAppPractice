import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [dane, setDane] = useState([]);
  const [id, setId] = useState("");

  const getData = async (id) => {
    let response = await fetch("http://localhost:8000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    let result = await response.json();
    setDane(result);
  };

  const handleInputChange = (e) => {
    const newId = e.target.value;
    setId(newId);
    getData(newId);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <form>
        <label>ID:</label>
        <input
          type="number"
          name="id"
          value={id}
          onChange={handleInputChange}
        />
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
