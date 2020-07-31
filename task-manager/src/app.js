const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

// Automaticaly parse incoming JSON
app.use(express.json())

// Load routes
app.use(userRouter)
app.use(taskRouter)

module.exports = app

