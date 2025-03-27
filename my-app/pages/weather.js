// pages/index.js

import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/weather?city=${encodeURIComponent(city)}`
      );
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
      } else {
        setError(data.error || "An error occurred while fetching weather data");
      }
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      />
      <button
        onClick={fetchWeather}
        disabled={loading}
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {loading ? "Loading..." : "Get Weather"}
      </button>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ textAlign: "center" }}>Weather in {weather.name}</h2>
          <p>
            <strong>Temperature:</strong> {weather.main.temp}°C
          </p>
          <p>
            <strong>Condition:</strong> {weather.weather[0].description}
          </p>
          <p>
            <strong>Humidity:</strong> {weather.main.humidity}%
          </p>
        </div>
      )}
    </div>
  );
}
