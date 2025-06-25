import React from 'react';
import { Thermometer, Droplets, Wind, Eye } from 'lucide-react';

const WeatherDetails = ({ weatherData }) => {
  const details = [
    {
      icon: Thermometer,
      label: 'Feels like',
      value: `${Math.round(weatherData.main.feels_like)}°F`,
      color: 'text-red-500'
    },
    {
      icon: Droplets,
      label: 'Humidity',
      value: `${weatherData.main.humidity}%`,
      color: 'text-blue-500'
    },
    {
      icon: Wind,
      label: 'Wind Speed',
      value: `${Math.round(weatherData.wind?.speed || 0)} mph`,
      color: 'text-gray-500'
    },
    {
      icon: Eye,
      label: 'Visibility',
      value: `${Math.round((weatherData.visibility || 0) / 1609)} mi`,
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 text-sm">
      {details.map((detail, index) => {
        const IconComponent = detail.icon;
        return (
          <div key={index} className="flex items-center gap-2 bg-white rounded-lg p-3">
            <IconComponent size={16} className={detail.color} />
            <div>
              <div className="font-medium">{detail.label}</div>
              <div className="text-gray-600">{detail.value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherDetails;