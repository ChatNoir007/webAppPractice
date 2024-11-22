import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [dane, setDane] = useState([]);

  let getData = async () => {
    let dane = await fetch("http://localhost:8000/users");
    let result = await dane.json();
    setDane(result);
  };

  const drop = async (id) => {
    await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE"
    });
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>imie</th>
            <th>nazwisko</th>
            <th>email</th>
            <th>płeć</th>
            <th>miasto</th>
            <th>Podgląd</th>
            <th>Usuń</th>
          </tr>
        </thead>
        <tbody>
          {dane.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.city}</td>
              <td>
                <a href={`./users/${item.id}`}>Podgląd</a>
              </td>
              <td>
                <button onClick={(e) => drop(item.id)}>Usuń</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
