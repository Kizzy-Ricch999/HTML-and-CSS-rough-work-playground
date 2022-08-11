const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('starting submiting form')
    const inputs = document.querySelectorAll('input')

    console.log(inputs)
})