console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')

const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value

    fetch(`/weather?address=${encodeURIComponent(location)}`).then((response) => {
        response.json().then( (data) => {
            if(data.error){
                console.error(data.error)
            }else{
                console.log(data.address)
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})