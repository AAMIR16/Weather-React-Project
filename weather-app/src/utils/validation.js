// Validation utilities

export const validateZipCode = (zipCode) => {
    if (!zipCode || !zipCode.trim()) {
      return 'Please enter a zip code';
    }
    
    const trimmedZip = zipCode.trim();
    
    if (!/^\d{5}$/.test(trimmedZip)) {
      return 'Please enter a valid 5-digit zip code';
    }
    
    return null; // No error
  };
  
  export const validateApiKey = (apiKey) => {
    if (!apiKey || apiKey === 'YOUR_API_KEY') {
      return 'Please add a valid OpenWeatherMap API key';
    }
    return null;
  };
  
  // Future validation functions
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validateTemperatureUnit = (unit) => {
    const validUnits = ['imperial', 'metric', 'kelvin'];
    return validUnits.includes(unit);
  };