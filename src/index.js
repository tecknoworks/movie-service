const express = require('express')
const bodyParser= require('body-parser')
const cors=require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

const router= require('./api')

const connection=require('./loaders/mongoose');
const seeders= require('./seeders/movie')

// seeders.seed()

app.use('/movies', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))