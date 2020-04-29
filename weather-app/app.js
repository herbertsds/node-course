const access_key = require('./access_key')
const request = require('postman-request')

const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=37.8267,-122.4233`

request({ url }, (error, response) => {
    const data = JSON.parse(response.body)

    console.log(data.current)
})