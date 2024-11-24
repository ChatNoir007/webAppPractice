import './App.css';
import { useState, useEffect } from 'react';
import kadr from './kadr.jpg';

function App() {
  // const [dane, setDane] = useState([]);

  let handleSubmit = e => {
    e.preventDefault()
    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({title: e.target.title.value, genre: e.target.genre.value, year: e.target.year.value, rating: e.target.rating.value})
    })
  }

  // let getData = async () => {
  //     let dane = await fetch("http://localhost:8000/");
  //     let result = await dane.json();
  //     setDane(result);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="App">

        <section className="left">
          <h3>Dostępne gatunki filmu</h3>
          <ol>
            <li>Sci-Fi</li>
            <li>animacja</li>
            <li>dramat</li>
            <li>horror</li>
            <li>komedia</li>
          </ol>
          <p><a href={kadr}>Pobierz Obraz</a></p>
          <p><a href="repertuar-kin.pl" target="_blank">sprawdź repertuar kin</a></p>
        </section>

        <section className="right">
          <header className="right1">
            <h1>FILMOTEKA</h1>
          </header>

          <section className="right2">
            <form onSubmit={handleSubmit}>
              <label name="title">Tytuł:</label>
              <input type="text" name="title"/> <br></br>
              <label name="genre">Gatunek Filmu:</label>
              <input type="number" name="genre"/> <br></br>
              <label name="year">Rok Produkcji:</label>
              <input type="number" name="year"/> <br></br>
              <label name="rating">Ocena:</label>
              <input type="number" name="rating"/> <br></br>

              <button>CZYŚĆ</button>
              <button type='submit'>DODAJ</button>
            </form>
            
          </section>

          <section className="right3">
            <img src={kadr} alt="zdjęcia filmowe" />
          </section>
        </section>
      
      <footer>
        <p>Autor strony: Wojciech Lipiec</p>
      </footer>



      {/* <form onChange={handleSubmit}>
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
      </table> */}
    </div>
  );
}

export default App;
