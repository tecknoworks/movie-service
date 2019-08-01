const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

const router= require('./api/api')

const connection=require('./loaders/mongoose');
const seeders= require('./seeders/movie')
seeders.seed()
app.use('/', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))