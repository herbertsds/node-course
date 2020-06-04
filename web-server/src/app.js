const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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
        title: 'Clima',
        name: 'Herbert Salazar'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Sobre mim',
        name: 'Herbert Salazar'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Digite o nome de um local. Experimente digitar o seu nome.',
        title: 'Ajuda',
        name: 'Herbert Salazar'
    })
})

app.get('/weather', ({query:{address}}, res) => {

    if(!address){
        return res.send({
            error: 'É necessário fornecer um endereço'
        })
    }

    geocode(address, (error, {latitude, longitude, location} = {}) =>{

        if(error){
            return res.send({
                error
            })
        }
        
        forecast(latitude, longitude, (error, forecast) => {
            
            if(error){
                return res.send({
                    error
                })
            }
            
            res.send({
                address,
                location,
                forecast
            })
        })
    
    })

    
})

app.get('/products', (req, res) => {

    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }

    res.send({
        products: []
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
        errorMessage: 'Página não encontrada.',
        name: 'Herbert Salazar'
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})