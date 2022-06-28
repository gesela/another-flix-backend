// Imports
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./config/database')

// ===== MIDDLEWARES =====
app.use(express.json())
app.use(cors())

//chech if we have a token and create 
app.use(require('./config/checkToken'))

// ===== ROUTES =====
// Users
app.use('/api/v1/users', require('./routes/api/users'))

//protect API routes
const ensureLoggedIn = require('./config/ensureLoggedIn')
// Movies
app.use('/api/v1/movies', require('./routes/api/movies'))

// ===== PORT =====
const port = 8080

app.listen(port, () => console.log(`Express app running on port ${port}`))