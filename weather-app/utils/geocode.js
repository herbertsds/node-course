const request = require('postman-request')
const access_key = require('../access_key')


const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${access_key.mapbox}&limit=1`

    request({url, json: true}, (error, {body:{features:response, message} = {}} = {} ) => {
        if(error){
            callback('Unable to connect to location services!')
        }else if(message){
            console.log(message)
        }else if(response.length === 0){
            callback('Unable to find location. Try another search.')
        }else{
            callback(undefined, {
                latitude: response[0].center[1],
                longitude: response[0].center[0],
                location: response[0].place_name
            })
        }
    })

}

module.exports = geocode