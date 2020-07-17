const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     res.status(503).send('Server is down for maintenance. Please comme back later.')
// })


// Automaticaly parse incoming JSON
app.use(express.json())

// Load routes
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

const Task = require('./models/task')

const main = async () => {
    const task = await Task.findById('5f12073cc7d36537cd6b7caf')
    await task.populate('owner').execPopulate()
    console.log(task.owner)
}

main()