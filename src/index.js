const express = require('express')
const bodyParser= require('body-parser')
const cors=require('cors')
const fileUpload = require('express-fileupload')
const logger = require('morgan')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const config = require("./config");

app.use(cors())
app.use(fileUpload())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '3gb', extended: true}));
app.use(logger('dev'))

const router= require('./api')

mongoose.connect(config.databaseUrl, { useNewUrlParser: true })

app.use('/movies', router)

app.listen(port, () => console.log(`movie-service listening on port ${port}!`))