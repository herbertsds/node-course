const path = require('path')
const express = require('express')

const app = express()

const pubDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(pubDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        forecast:'Light Rain',
        Location: 'Belford Roxo'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})