import "./App.css";
import tir from "./Images/tir.gif";
import klouch from "./Images/klocuch.jpg";
import niemcy from "./Images/niemcy.jpg";
import rybka from "./Images/rybka.jpg";
import zenek from "./Images/zenek.jpg";
import mikolajtir from "./Images/mikolajtir.png";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Strona Świąteczna 4P</h1>
        <img className="tir" src={mikolajtir} alt="tir" />
      </header>
      <main>
        <div className="gallery">
          <a
            href="https://www.youtube.com/playlist?list=PLy07vJ1h0aUpQWjdmRQs7WZ0Ejht20jzZ"
            target="_blank"
          >
            <img className="okladka" src={klouch} alt="klocuch" />
          </a>
          <a href="https://www.youtube.com/watch?v=zE-xk_pUK54" target="_blank">
            <img className="okladka" src={niemcy} alt="niemcy" />
          </a>
          <a href="https://www.youtube.com/watch?v=MQgrhJA8VAQ" target="_blank">
            <img className="okladka" src={rybka} alt="rybka" />
          </a>
          <a href="https://www.youtube.com/watch?v=tWdHnW3UhZE" target="_blank">
            <img className="okladka" src={zenek} alt="zenek" />
          </a>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
