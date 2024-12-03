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
      method: "DELETE",
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
            <th>Edytuj</th>
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
              <td className="btnContainer">
                <a href={`./users/${item.id}`} className="btnInfo">
                  Podgląd
                </a>
              </td>
              <td className="btnContainer">
                <a href={`./users/edit/${item.id}`} className="btnEdit">
                  Edytuj
                </a>
              </td>
              <td className="btnContainer">
                <button onClick={(e) => drop(item.id)} className="btnDelete">
                  X
                </button>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
      <div className="btnContainer">
        <a href="./users/add" className="btnAdd">
          Dodaj
        </a>
      </div>
    </>
  );
}

export default App;
