# Weather-React-Project
Project for displaying the weather
# Weather App

A modern, responsive React weather application that displays current weather conditions based on zip code input.

## Features

- 🌤️ Real-time weather data from OpenWeatherMap API
- 📍 Zip code-based location search
- 🎨 Dynamic weather icons based on conditions
- 📱 Responsive design with Tailwind CSS
- ⚡ Fast and lightweight
- 🛡️ Input validation and error handling

## Screenshots

![Weather App Screenshot](screenshot.png)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (free at [openweathermap.org](https://openweathermap.org/api))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Get your API key:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Get your free API key
   - Replace `YOUR_API_KEY` in `src/services/weatherService.js` with your actual API key

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
weather-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── WeatherCard.js       # Main weather display component
│   │   ├── WeatherIcon.js       # Dynamic weather icons
│   │   └── WeatherDetails.js    # Weather details grid
│   ├── services/
│   │   └── weatherService.js    # API calls and data fetching
│   ├── utils/
│   │   └── validation.js        # Input validation utilities
│   ├── styles/
│   │   └── index.css           # Global styles and Tailwind imports
│   ├── App.js                  # Main application component
│   └── index.js               # React app entry point
├── package.json
├── tailwind.config.js
└── README.md
```

## Built With

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **OpenWeatherMap API** - Weather data provider

## API Setup

1. Visit [OpenWeatherMap API](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key
4. Replace `YOUR_API_KEY` in `src/services/weatherService.js`:

```javascript
const API_KEY = 'your_actual_api_key_here';
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Lucide](https://lucide.dev/)
- Built with [Create React App](https://create-react-app.dev/)

## Support

If you have any questions or run into issues, please open an issue on GitHub.