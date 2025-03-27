// pages/api/weather.js

export default async function handler(req, res) {
  const { city } = req.query;

  if (!city || typeof city !== "string" || city.trim() === "") {
    return res
      .status(400)
      .json({
        error: "City parameter is required and must be a non-empty string",
      });
  }

  try {
    const apiKey = "5c6525d1e4432969ea78643ecd9d468a";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${apiKey}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({
        error: errorData.message || "Failed to fetch weather data",
      });
    }

    const weatherData = await response.json();
    res.status(200).json(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
