console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''

    fetch(`/weather?address=${encodeURIComponent(location)}`).then((response) => {
        response.json().then( (data) => {

            if(data.error){
                
                messageOne.textContent = `Error: ${data.error}`
            }else{
                messageOne.textContent = `Searched for: ${data.address}`
                messageTwo.textContent = `Found: ${data.location}`
                messageThree.textContent = `Forecast: ${data.forecast}`
            }
        })
    })
})