import React, { useState } from 'react';
import axios from 'axios';

const WeatherForm = ({ addWeatherData, setLoading }) => {
  const [city, setCity] = useState('');

  const apikey = '4fc6b5ee81988a4611f706919d9b3593';
  const apilink = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(`${apilink}${city}&appid=${apikey}`);
      addWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Invalid city name or API error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather(city);
      setCity(''); // Clear the input field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default WeatherForm;
