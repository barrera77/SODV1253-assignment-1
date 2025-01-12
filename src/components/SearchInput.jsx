import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchData } from "../services/api-client.js";

import "../WeatherDisplay.css";

const SearchInput = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState("");

    const handleSearch= async () => {
        try {
            const jsonData = await fetchData("./data/locations.json")
        } catch (err) {
            setError(err.message);
          }
    }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter location ..."
          value={location}
          className="search-input"
        />
        <button className="search-button" onClick={() => {}}>
          <FaSearch style={{ fontSize: "12px"}} /> Search
        </button>
      </div>
    </>
  )
}

export default SearchInput
