import { useEffect, useState } from "react";
import "./App.scss";
import carsJson from "./assets/cars.json";

type Car = {
id: string,
name: string,
url: string,
year: number,
}

function App() {
  const [cars, setCars] = useState<[Car]>(carsJson as [Car]);
  const [selectedYear, setSelectedYear] = useState<number | undefined>();
  console.log(cars);


  const filterByYear = (filteredData: [Car]) => {
    if (!selectedYear) {
      return filteredData;
    }
    const filteredCars = filteredData.filter(
      (car) => car.year === selectedYear
    );
    return filteredCars;
  };
  const handleYearChange = (year: number) => {
    console.log(year);
    if (year === selectedYear) {
      setSelectedYear(undefined);
    } else {
      setSelectedYear(year);
    }
  };
let filteredCars= filterByYear(cars)
  return (
    <div className="Cars">
      <h1>Selected Cars</h1>

      <div className="selectedYear">
        <div className="year">
          {[2018, 2019, 2020].map((year) => (
            <div
              key={year}
              onClick={() => handleYearChange(year)}
              className={selectedYear === year ? "active" : "filter"}
            >
              {year}
            </div>
          ))}
        </div>
      </div>

      <div className="cars">
        {filteredCars.map((car) => (
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
