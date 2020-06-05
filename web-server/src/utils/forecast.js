const request = require('postman-request')
const access_key = require('../access_key')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${access_key.weatherstack}&query=${lat},${long}`

    request({url, json: true}, (error, { body:{ error:responseError, current:{temperature, feelslike, weather_descriptions, humidity}={}, location:{name, country, region}={} } = {} } = {}) => {
        if(error){
            callback('Unable to connect to weather service!')
        }else if(responseError){
            callback(responseError.info)
        }else{
            callback(undefined, `${name}, ${region}, ${country}. ${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degress out. The humidity is ${humidity}%.`)

        }

    })
}

module.exports = forecast