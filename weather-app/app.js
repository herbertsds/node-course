const access_key = require('./access_key')
const request = require('postman-request')

// Weatherstack Service
const weatherstack_url = `http://api.weatherstack.com/current?access_key=${access_key.weatherstack}&query=37.8267,-122.4233`

request({ url: weatherstack_url, json: true }, (error, response) => {

    if(error){
        console.log('Unable to connect to weather service!')
    }else if (response.body.error){
        console.log(response.body.error.info)
    }else{
        const {temperature, feelslike, weather_descriptions} = response.body.current

        const message = `${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degress out.`
    
        console.log(message)
    }
})

// Mapbox Service
const mapbox_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${access_key.mapbox}&limit=1`

request({ url: mapbox_url, json: true }, (error, response) => {

    if(error){
        console.log('Unable to connect to mapbox service!')
    }else if(response.body.features.length === 0){
        console.log('Location not found!')
    }else{
        const { center } = response.body.features[0]

        const latitude = center[1]
        const longitude = center[0]
    
        console.log(latitude, longitude)
    }

})