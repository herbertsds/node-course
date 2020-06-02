const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Herbert Salazar'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Herbert Salazar'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Help me please!',
        title: 'Help',
        name: 'Herbert Salazar'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast:'Light Rain',
        Location: 'Belford Roxo'
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: '404',
        errorMessage: 'Help article not found.',
        name: 'Herbert Salazar'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        title: '404',
        errorMessage: 'Page not found.',
        name: 'Herbert Salazar'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})