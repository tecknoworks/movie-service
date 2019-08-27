const express = require('express')
const bodyParser= require('body-parser')
const cors=require('cors')
const logger = require('morgan')
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(logger('dev'))

const router= require('./api')

const connection=require('./loaders/mongoose');
const seeders= require('./seeders/movie')

// seeders.seed()

app.use('/movies', router)

app.listen(port, () => console.log(`movie-service listening on port ${port}!`))