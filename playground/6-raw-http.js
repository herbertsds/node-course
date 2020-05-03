const https = require('https')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Dunaudjvaros.json?access_token=pk.eyJ1IjoiaGVyYmVydHNkcyIsImEiOiJjazlsdjg5ZmgwMjdqM2lyenpjaWV2dWozIn0.caxwhnsfoUwSoKT1_AEEYA&limit=1'

const request = https.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log(error)
})

request.end()