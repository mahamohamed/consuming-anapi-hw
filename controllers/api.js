const router = require('express').Router()
const axios = require('axios')

router.get('/weather', (req, res) => {
  res.render('weather.ejs', { weather: null, error: null })
})

router.post('/weather', (req, res) => {
  const zip = req.body.zipCode
  const apiKey = process.env.API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${zip}&APPID=${apiKey}`

  axios
    .get(url)
    .then((response) => {
      const weather = {
        name: response.data.name,
        temp: response.data.main.temp,
        desc: response.data.weather[0].description
      }

      res.render('weather.ejs', { weather, error: null })
    })
    .catch((err) => {
      console.error(err)
      res.render('weather.ejs', {
        weather: null,
        error: 'No Data, Try again.'
      })
    })
})

module.exports = router
