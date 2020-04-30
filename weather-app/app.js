const access_key = require('./access_key')
const request = require('postman-request')

const weatherstack_url = `http://api.weatherstack.com/current?access_key=${access_key.weatherstack}&query=37.8267,-122.4233`

const mapbox_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${access_key.mapbox}&limit=1`

request({ url: weatherstack_url, json: true }, (error, response) => {

    const {temperature, feelslike, weather_descriptions} = response.body.current

    const message = `${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degress out.`

    console.log(message)

})

request({ url: mapbox_url, json: true }, (error, response) => {

    const { center } = response.body.features[0]

    const latitude = center[1]
    const longitude = center[0]

    console.log(latitude, longitude)
})