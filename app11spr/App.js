import './App.css';
import {useState} from 'react';

function App() {
  // const [licznik, setLicznik] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();

    fetch("http://localhost:4000/", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({imie: e.target.imie.value, nazwisko: e.target.nazwisko.value, rok: e.target.rok.value,})
    })
  }

  const onInfo

  return (
    <>
      {/* <h1>{licznik}</h1>
      <button onClick={() => {setLicznik(licznik+1)}}>Liczenie</button> */}

      <form onSubmit={handleSubmit}>
        <input type='text' name="imie" />
        <input type='text' name="nazwisko" />
        <input type='number' name="rok" />

        <button type='submit'>wyslij</button>
      </form>

      <button onClick={onInfo}>kolejny przycisk</button>

    </>
  );
}

export default App;
