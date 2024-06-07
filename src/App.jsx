import React, { useState, useEffect } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const addWeatherData = (data) => {
    setWeatherData((prevData) => [...prevData, data]);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="toggle-switch">
        <input 
          type="checkbox" 
          id="darkModeToggle" 
          checked={darkMode} 
          onChange={() => setDarkMode(!darkMode)} 
        />
        <label htmlFor="darkModeToggle"></label>
      </div>
      <WeatherForm addWeatherData={addWeatherData} setLoading={setLoading} />
      {loading ? <p>Loading...</p> : ''}
      <WeatherDisplay data={weatherData} />
    </div>
  );
};

export default App;
