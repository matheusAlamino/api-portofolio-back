const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./src/config/routes')


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
// app.use(routes)

// require('./src/app/controllers/index')(app);
require('./src/app/controllers/vimeoController')(app);

app.listen(21262, () => {
    console.log(`Express started at http://localhost:21262`)
})