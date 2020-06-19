require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5eeccebaa7d3e23cba69bdf0').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})