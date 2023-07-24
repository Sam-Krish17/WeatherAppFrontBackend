
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

// CORS configuration
const allowedOrigins = ['http://localhost:4200']; // Add other origins as needed
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

app.get('/api/weather', async (req, res) => {
  const apiKey = '9db0e77bd78843a0bed54912232407'; 
  const city = req.query.city;

  try {
    const weatherResponse = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );

    res.json(weatherResponse.data);
  } catch (error) {
    res.status(error.response.status || 500).json({
      error: 'Failed to fetch weather data.'
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
