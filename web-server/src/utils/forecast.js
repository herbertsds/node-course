const request = require('postman-request')
const access_key = require('../access_key')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${access_key.weatherstack}&query=${lat},${long}`

    request({url, json: true}, (error, { body:{ error:responseError, current:{temperature, feelslike, weather_descriptions}={}, location:{name, country, region}={} } = {} } = {}) => {
        if(error){
            callback('Unable to connect to weather service!')
        }else if(responseError){
            callback(responseError.info)
        }else{
            callback(undefined, `A temperatura atual é de ${temperature} graus. A sensação térmica é de ${feelslike} graus.`)
        }

    })
}

module.exports = forecast