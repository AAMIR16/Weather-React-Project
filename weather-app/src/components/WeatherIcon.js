import React from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning } from 'lucide-react';

const WeatherIcon = ({ condition, temperature, size = 64 }) => {
  const iconProps = { size, className: "text-blue-500" };
  
  if (!condition) {
    return <Sun {...iconProps} className="text-yellow-500" />;
  }
  
  const conditionLower = condition.toLowerCase();
  
  // Rain conditions
  if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
    return <CloudRain {...iconProps} />;
  }
  
  // Snow conditions
  if (conditionLower.includes('snow')) {
    return <CloudSnow {...iconProps} className="text-gray-300" />;
  }
  
  // Storm conditions
  if (conditionLower.includes('thunder') || conditionLower.includes('storm')) {
    return <CloudLightning {...iconProps} className="text-purple-600" />;
  }
  
  // Cloudy conditions
  if (conditionLower.includes('cloud') || conditionLower.includes('overcast')) {
    return <Cloud {...iconProps} className="text-gray-500" />;
  }
  
  // Clear/sunny conditions
  if (conditionLower.includes('clear') || conditionLower.includes('sunny')) {
    return <Sun {...iconProps} className="text-yellow-500" />;
  }
  
  // Default based on temperature
  return temperature > 70 ? 
    <Sun {...iconProps} className="text-yellow-500" /> : 
    <Cloud {...iconProps} className="text-gray-500" />;
};

export default WeatherIcon;