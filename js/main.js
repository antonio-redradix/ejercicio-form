let form = document.querySelector('#form');
let signButton = document.querySelector('#signButton');
let shows = document.querySelector('#shows');

shows.innerHTML = '<option value="">Select one show</option>';

let series = ["Game of Thrones", "Breaking Bad", "Black Mirror", "Sherlock", "Ozark", "You", "Chernobyl"]

for(serie of series) {
    let option = document.createElement('option');
    option.setAttribute('value', serie);
    option.innerHTML = serie;
    shows.appendChild(option);
}

signButton.onclick = submitForm;


// Declaramos los inputs
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let repeatPassword = document.querySelector('#repeatPassword');
let acceptLegal = document.querySelector('#acceptLegal');
let messageContainer = document.querySelector('#messageContainer');
let messageName = document.querySelector('#messageName');
let messageEmail = document.querySelector('#messageEmail');
let messagePassword = document.querySelector('#messagePassword');
let messageRepeatPassword = document.querySelector('#messageRepeatPassword');
let messageShow = document.querySelector('#messageNameShow');
let messageLegal = document.querySelector('#messageNameLegal');
let inputs = [username, email, password, repeatPassword, shows, acceptLegal]

let icons = ['#usernameIcon', '#emailIcon', '#passwordIcon', '#repeatPasswordIcon','#showsIcon']
icons = icons.map(selector => document.querySelector(selector))

function submitForm() {
    messageContainer.innerHTML = ''
    let errors = []

    errors.push(checkUser())
    errors.push(checkPass())
    errors.push(checkEqualPasswords())
    errors.push(checkMail())
    errors.push(checkSelect())
    errors.push(checkTerms())

    errors.forEach((error, i) => {
        if(error){
            if(i === 5){
                inputs[i].classList.add('form__check__input--error')
            } else {
                icons[i].classList.add('form__icon--error')
                inputs[i].classList.add('form__input--error')
            }
            renderError(error)
        } else {
            icons[i].classList.remove('form__icon--error')
            icons[i].classList.add('form__icon--ok')
            inputs[i].classList.remove('form__input--error')
        }
    })

    function containsNumber(string){
        let prueba = /[0-9]/
        return prueba.test(string)
    }

    function renderError(error){
        let node = document.createElement('div')
        node.innerHTML = error
        node.classList.add('message')
        messageContainer.appendChild(node)
    }

    function checkUser(){
        if(username.value === '') {
            return 'El nombre esta vacio'
        } else if(username.value.length > 12){
            return 'El nombre es demasiado largo'
        }
    }

    function checkPass(){
        if(password.value === '') {
            return 'contraseña vacia'
        } else if(!containsNumber(password.value)){
            return 'La contraseña no tiene numero'
        }
    }

    function checkEqualPasswords(){
        if(password.value !== repeatPassword.value){
            return 'Las contraseñas no coinciden'
        }
    }

    function checkMail(){
        let parts = email.value.split('@')
        if(parts.length >= 2 && !parts[1].includes('.')){
            return 'El email tiene un formato inválido'
        }
    }

    function checkSelect(){
        if(shows.value === ''){
            return 'No has seleccionado una serie'
        }
    }

    function checkTerms(){
        if(!acceptLegal.checked){
            return 'Acepta los terminos y condiciones'
        }
    }
}
