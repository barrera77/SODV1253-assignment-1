import "./App.css";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  return (
    <>
      <div className="container">
        <div className="app">
          <WeatherDisplay />
        </div>
      </div>
    </>
  );
}

export default App;