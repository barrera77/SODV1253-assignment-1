import "../WeatherDisplay.css";
import SearchInput from "./SearchInput";

const WeatherDisplay = () => {
  return (
    <div className="weather-display">
      <h1>Weather App</h1>
      <SearchInput />
    </div>
  );
};

export default WeatherDisplay;
