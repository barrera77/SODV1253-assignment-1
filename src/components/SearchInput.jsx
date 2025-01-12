import { useState } from "react";
import {
  FaSearch,
  FaExclamationCircle,
  FaCloudRain,
  FaTemperatureHigh,
  FaTemperatureLow,
} from "react-icons/fa";
import { fetchData } from "../services/api-client.js";

import "../WeatherDisplay.css";

const SearchInput = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");

  const handleSearch = async () => {
    try {
      const weatherData = await fetchData("/data/locations.json");

      if (!location.trim()) {
        setData(weatherData);
        setError(null);
        return;
      }

      const result = weatherData.find(
        (item) => item.city.toLowerCase() === location.toLowerCase()
      );

      if (result) {
        setData(result);
        setError(null);
      } else {
        setData(null);
        setError("City not found");
      }
    } catch (err) {
      setError("Failed to fetch data", err);
      setData(null);
    }
  };

  return (
    <>
      <div className="search-container sm:w-[100%] xs:flex-col md:w-[80%] ">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter location ..."
          className="search-input xs:w-[100%]"
        />
        <button className="search-button" onClick={handleSearch}>
          <FaSearch style={{ fontSize: "12px" }} /> Search
        </button>
      </div>

      {error && (
        <div className="error-message">
          <FaExclamationCircle />
          <p>{error}</p>
        </div>
      )}

      <div className="cards-wrapper">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className="weather-card xs:flex-col xs:gap-3 md:flex-row md:gap-3"
            >
              <div className="card-header">
                <h2 className="city-info">{item.city}</h2>
              </div>
              <div className="card-content xs:w-[100%] xs:flex-col xs:gap-3 sm:flex-row sm:w-[75%]">
                <div className="temp-info xs:w-[100%] sm:w-[50%] md:w-[180px] lg:w-[200px]">
                  <FaTemperatureLow className="text-2xl" />
                  <p className="text-2xl">{item.temperature}</p>
                </div>
                <div className="weather-info xs:w-[100%] sm:w-[50%] md:w-[180px] lg:w-[200px]">
                  <FaCloudRain />
                  <p>{item.weather}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchInput;
