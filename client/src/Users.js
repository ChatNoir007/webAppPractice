import "./App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Users() {
  const [dane, setDane] = useState([]);
  let { id } = useParams();

  let getData = async () => {
    let dane = await fetch(`http://localhost:8000/users/${id}`);
    let result = await dane.json();
    setDane(result);
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;
