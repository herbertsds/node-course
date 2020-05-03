const request = require('postman-request')
const access_key = require('../access_key')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${access_key.weatherstack}&query=${long},${lat}`

    request({url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather service!')
        }else if(response.body.error){
            callback(response.body.error.info)
        }else{
            const {temperature, feelslike, weather_descriptions} = response.body.current

            callback(undefined, `${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degress out.`)

        }

    })
}

module.exports = forecast