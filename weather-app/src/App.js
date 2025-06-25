import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import { fetchWeatherData } from './services/weatherService';
import { validateZipCode } from '..utils/validation';
import './styles/index.css';

function App() {
  const [zipCode, setZipCode] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateZipCode(zipCode);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const data = await fetchWeatherData(zipCode.trim());
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-2xl p-6 mb-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Weather App
          </h1>
          
          <div className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter zip code (e.g., 94536)"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                maxLength="5"
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
              />
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Loading...' : 'Get Weather'}
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 text-sm text-gray-600">
          <h3 className="font-semibold mb-2">Setup Instructions:</h3>
          <ol className="list-decimal ml-4 space-y-1">
            <li>Get a free API key from <a href="https://openweathermap.org/api" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a></li>
            <li>Add your API key to the weatherService.js file</li>
            <li>The app will work with any valid US zip code</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;