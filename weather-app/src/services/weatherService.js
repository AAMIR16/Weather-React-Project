// Weather API service
const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (zipCode) => {
  try {
    const response = await fetch(
      `${BASE_URL}?zip=${zipCode},US&appid=${API_KEY}&units=imperial`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Zip code not found. Please enter a valid US zip code.');
      } else if (response.status === 401) {
        throw new Error('API key invalid. Please check your OpenWeatherMap API key.');
      } else {
        throw new Error('Failed to fetch weather data. Please try again.');
      }
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
};

// Optional: Add more weather service functions
export const fetchForecastData = async (zipCode) => {
  // Future implementation for 5-day forecast
  // const forecastUrl = `${BASE_URL.replace('weather', 'forecast')}?zip=${zipCode},US&appid=${API_KEY}&units=imperial`;
  // Implementation here...
};