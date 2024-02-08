document.addEventListener('DOMContentLoaded', () => {

    const sendSubscribe = document.querySelector('#send-subscribe')
    const dismissMessage = document.querySelector('#dismiss-message')
    const email = document.querySelector('#email')
    const errorMessage = document.querySelector('.form__error')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const cardNewsletter = document.querySelector('.card__newsletter')
    const cardCongratulations = document.querySelector('.card__congratulations')

     // Funcion para mostrar los estilos en caso de error
    const showErrorStyles = () => {
        email.style.border = '1px solid var(--color-red)'
        email.style.backgroundColor = 'var(--color-light-red)'   
        email.style.color = 'var(--color-red)'
    }

    // Funcion para ocultar los estilos en caso de que no hay error
    const hideErrorStyles = () => {
        email.style.border = '1px solid var(--color-light-gray)'
        email.style.backgroundColor = 'var(--color-white)'   
        email.style.color = 'var(--color-dark-gray)'
        email.value = ''
        errorMessage.innerHTML = ''
    }

    // Verificamos si el correo es valido antes de enviar la peticion
    sendSubscribe.addEventListener('click', () => {
        // Situaciones que muestran el mensaje de error y ocultan las clases correspondientes        
        if(email.value === '') {
            errorMessage.innerHTML = 'It looks like you forgot to add your email'
            showErrorStyles()            
        } else if( !emailRegex.test(email.value)) { 
            errorMessage.innerHTML = 'Valid email required'
            showErrorStyles()
        } else {
            cardNewsletter.style.display = 'none'
            cardCongratulations.style.display = 'flex'
            hideErrorStyles()
        }       
    })

    // Disminuir el mensaje de exito
    dismissMessage.addEventListener('click', () => {        
        cardCongratulations.style.display = 'none'
        cardNewsletter.style.display = 'flex'        
        hideErrorStyles()        
    })

})