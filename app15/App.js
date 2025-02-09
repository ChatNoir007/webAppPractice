import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const Data = [
    { id: 0, alt: "Mak", filename: "obraz1.jpg", category: 1, downloads: 35 },
    { id: 1, alt: "Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43 },
    { id: 2, alt: "Dalmatyńczyk", filename: "obraz3.jpg", category: 2, downloads: 2 },
    { id: 3, alt: "Świnka morska", filename: "obraz4.jpg", category: 2, downloads: 53 },
    { id: 4, alt: "Rotwailer", filename: "obraz5.jpg", category: 2, downloads: 43 },
    { id: 5, alt: "Audi", filename: "obraz6.jpg", category: 3, downloads: 11 },
    { id: 6, alt: "Kotki", filename: "obraz7.jpg", category: 2, downloads: 22 },
    { id: 7, alt: "Róża", filename: "obraz8.jpg", category: 1, downloads: 33 },
    { id: 8, alt: "Świnka morska", filename: "obraz9.jpg", category: 2, downloads: 123 },
    { id: 9, alt: "Foksterier", filename: "obraz10.jpg", category: 2, downloads: 22 },
    { id: 10, alt: "Szczeniak", filename: "obraz11.jpg", category: 2, downloads: 12 },
    { id: 11, alt: "Garbus", filename: "obraz12.jpg", category: 3, downloads: 321 },
  ];

  const [dane, setDane] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([1, 2, 3]);

  useEffect(() => {
    setDane(Data);
  }, []);

  const download = (id) => {
    setDane((prevDane) =>
      prevDane.map((item) =>
        item.id === id ? { ...item, downloads: item.downloads + 1 } : item
      )
    );
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const filteredData = dane.filter((item) => selectedCategories.includes(item.category));

  return (
    <div className="container mt-3">
      <h1>Kategorie zdjęć</h1>
      <div className="d-flex gap-3">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            id="flowers"
            type="checkbox"
            checked={selectedCategories.includes(1)}
            onChange={() => toggleCategory(1)}
          />
          <label className="form-check-label" htmlFor="flowers">Kwiaty</label>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            id="animals"
            type="checkbox"
            checked={selectedCategories.includes(2)}
            onChange={() => toggleCategory(2)}
          />
          <label className="form-check-label" htmlFor="animals">Zwierzęta</label>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            id="cars"
            type="checkbox"
            checked={selectedCategories.includes(3)}
            onChange={() => toggleCategory(3)}
          />
          <label className="form-check-label" htmlFor="cars">Samochody</label>
        </div>
      </div>

      <div className="row mt-3">
        {filteredData.length === 0 ? (
          <p>wszysto odznaczone</p>
        ) : (
          filteredData.map((item) => (
            <div className="col-4 mb-3" key={item.id}>
              <div className="card">
                <img className="card-img-top" src={require(`./assets/${item.filename}`)} alt={item.alt} />
                <div className="card-body">
                  <h4 className="card-title">{item.alt}</h4>
                  <p className="card-text">Pobrań: {item.downloads}</p>
                  <button className="btn btn-success" onClick={() => download(item.id)}>
                    Pobierz
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
