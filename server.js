const bodyParser = require('body-parser')
require('dotenv').config()
const express = require('express')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
const api = require('./controllers/api')
app.use('/', api)



app.get('/', (req, res) => {
  res.redirect('/weather')
})


app.listen(3000)
