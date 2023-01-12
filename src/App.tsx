import { useEffect, useState } from "react";
import "./App.scss";
import carsJson from "./assets/cars.json";

function App() {
  const [cars, setCars] = useState(carsJson);
  const [selectedYear, setSelectedYear] = useState();
  console.log(cars);

  return (
    <div className="Cars">
      <h1>Selected Cars</h1>

      <div className="selectedYear">
        <div className="year">
          {[2018, 2019, 2020].map((year) => (
            <div
              key={year}
              className={selectedYear === year ? "active" : "filter"}
            >
              {year}
            </div>
          ))}
        </div>
      </div>

      <div className="cars">
        {cars.map((car) => (
          <div key={car.id} className="car">
            <div className="name">{car.name}</div>
            <div className="year">{car.year}</div>
            <img className="image" src={car.url} alt={car.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
