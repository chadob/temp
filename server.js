const express = require('express');

const app = express();
const port = 3000;

function getForecast(id) {
  console.log('getforecast ran');
  // 'api.openweathermap.org/data/2.5/forecast?id=' + 519188 + '&appid=28ef679d8fb04c8836b3d6eaf9a28141'
}
app.get('/forecast/*', getForecast);


app.listen(port, () => console.log(`Listening on port ${port}`));
