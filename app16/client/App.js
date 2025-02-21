// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import logo from "./logo1.png";

function App() {
  const [script1, setScript1] = useState([]);
  const [script2, setScript2] = useState([]);


  let getScript1 = async () => {
    let script1 = await fetch("http://localhost:8000/script1");
    let result = await script1.json();
    setScript1(result);
  };

  let getScript2 = async () => {
    let script2 = await fetch("http://localhost:8000/script2");
    let result = await script2.json();
    setScript2(result);
  };

  const handleForm = (e) => {
    e.preventDefault();
    let wpis = e.target.wpis.value;
    fetch("http://localhost:8000/wpis", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ wpis: wpis }),
    });
  }

  useEffect(() => {
    getScript1();
    getScript2();
  });

  return (
    <div className="">
      <header>
        <section className="blok1">
          <img src={logo}></img>
        </section>
        <section className="blok2">
          <h1>KALENDARZ</h1>
          {script1.map(x => (
            <h3>miesiąc: {x.miesiac}, rok: {x.rok}</h3>
          ))}
        </section>  
      </header>
      <main>
        {script2.map(x => (
            <section className="dzien">
              <h5>{x.dataZadania}</h5>
              <p>{x.wpis}</p>
            </section>
        ))}
      </main>
      
      <footer>
        <form onSubmit={handleForm}>
          <label htmlFor="wpis">dodaj wpis: </label>
          <input type="text" name="wpis"></input>
          <button>DODAJ</button>
        </form>
        <p>Stronę wykonał: Wojciech Lipiec</p>
      </footer>
    </div>
  );
}

export default App;
