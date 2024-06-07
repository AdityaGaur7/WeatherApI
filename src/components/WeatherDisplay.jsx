import React, { useEffect, useState } from 'react';

const WeatherDisplay = ({ data }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <div>
      {data.slice().reverse().map((weatherData, index) => {
        const { name, main, weather, wind } = weatherData;
        const { temp, humidity, pressure } = main;
        const { description, icon } = weather[0];
        const { speed } = wind;

        return (
         <div className="weather-box" key={index}>
            <div className='weather-img'>
            <h2>{name}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
            />
            </div>
           
            <div className="weather-info">
              <div>
                <img src="img/temp.png" alt="Temperature" />
                <strong>Temperature:</strong> {temp}°C
              </div>
              <div>
                <img src="img/humid.png" alt="Humidity" />
                <strong>Humidity:</strong> {humidity}%
              </div>
              <div>
                📌
                <strong>Pressure:</strong> {pressure} hPa
              </div>
              <div>
                <img src="img/wind.png" alt="Wind Speed" />
                <strong>Wind Speed:</strong> {speed} m/s
              </div>
              <div>
                🗒️
                <strong>Description:</strong> {description}
              </div>
              <div>
                ⌚
                <strong>Current Time:</strong> {currentTime}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherDisplay;
