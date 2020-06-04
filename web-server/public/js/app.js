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
                messageOne.textContent = `Busca por: ${data.address}`
                messageTwo.textContent = data.address == 'Julie' || data.address ==  'julie' ? 'Encontrado: Pessoa mais maravilhosa que já conheci':`Encontrado: ${data.location}`
                messageThree.textContent = data.address == 'Julie' || data.address ==  'julie' ? 'Temperatura: Não importa, com ela presente o dia está sempre ensolarado.':`Temperatura: ${data.forecast}`
            }
        })
    })
})