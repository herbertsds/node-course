require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5eeccebaa7d3e23cba69bdf0').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})

    return count
}

deleteTaskAndCount('5edfebcd87ef7639fbb9f9c9').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})