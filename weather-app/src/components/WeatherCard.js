import React from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherDetails from './WeatherDetails';

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {weatherData.name}
        </h2>
        <div className="flex justify-center mb-4">
          <WeatherIcon 
            condition={weatherData.weather[0].main} 
            temperature={weatherData.main.temp}
            size={64}
          />
        </div>
        <div className="text-4xl font-bold text-gray-800 mb-2">
          {Math.round(weatherData.main.temp)}°F
        </div>
        <div className="text-lg text-gray-600 capitalize mb-4">
          {weatherData.weather[0].description}
        </div>
      </div>

      <WeatherDetails weatherData={weatherData} />

      <div className="mt-4 text-center text-xs text-gray-500">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
};

export default WeatherCard;