console.log('Client side javascript file is loaded!')

fetch('/weather?address=boston').then((response) => {
    response.json().then( (data) => {
        if(data.error){
            console.error(data.error)
        }else{
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })