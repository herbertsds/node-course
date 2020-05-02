const access_key = require('./access_key')
const request = require('postman-request')
const geocode = require('./utils/geocode')

// // Weatherstack Service
// const weatherstack_url = `http://api.weatherstack.com/current?access_key=${access_key.weatherstack}&query=37.8267,-122.4233`

// request({ url: weatherstack_url, json: true }, (error, response) => {

//     if(error){
//         console.log('Unable to connect to weather service!')
//     }else if (response.body.error){
//         console.log(response.body.error.info)
//     }else{
//         const {temperature, feelslike, weather_descriptions} = response.body.current

//         const message = `${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} degress out.`
    
//         console.log(message)
//     }
// })




geocode('Boston', (error, data) =>{
    console.log('Error', error)
    console.log('Data', data)
})