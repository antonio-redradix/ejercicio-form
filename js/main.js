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


function submitForm() {

    // Declaramos los inputs

    let username = document.querySelector('#username');
    let usernameIcon = document.querySelector('#usernameIcon');
    let email = document.querySelector('#email');
    let emailIcon = document.querySelector('#emailIcon');
    let password = document.querySelector('#password');
    let passwordIcon = document.querySelector('#passwordIcon');
    let repeatPassword = document.querySelector('#repeatPassword');
    let repeatPasswordIcon = document.querySelector('#repeatPasswordIcon');
    let shows = document.querySelector('#shows');
    let showsIcon = document.querySelector('#showsIcon');
    let acceptLegal = document.querySelector('#acceptLegal');
    let sectionMessage = document.querySelector('#messageContainer');
    let messageName = document.querySelector('#messageName');
    let messageEmail = document.querySelector('#messageEmail');
    let messagePassword = document.querySelector('#messagePassword');
    let messageRepeatPassword = document.querySelector('#messageRepeatPassword');
    let messageShow = document.querySelector('#messageNameShow');
    let messageLegal = document.querySelector('#messageNameLegal');

    function emptyInputs() {

        // Funcionamiento del campo nombre
        
        if(username.value === '') {
            console.log('Debes insertar tu nombre de usuario');
            messageContainer.appendChild(messageName).innerHTML = 'Debes insertar tu nombre de usuario';
            username.classList.add('form__input--error');
            usernameIcon.classList.add('form__icon--error');
            usernameIcon.classList.remove('form__icon--ok');
        }
        else if(username.value.length > 12) {
            console.log('Tu nombre tiene más de 12 caracteres');
            messageContainer.appendChild(messageName).innerHTML = 'Tu nombre tiene más de 12 caracteres';
            username.classList.add('form__input--error');
            usernameIcon.classList.add('form__icon--error');
            usernameIcon.classList.remove('form__icon--ok');
        }
        else {
            console.log('Tu nombre es: ' + username.value);
            usernameIcon.classList.add('form__icon--ok');
            username.classList.remove('form__input--error');
            messageName.classList.add('message--delete');
        }

        // Funcionamiento del campo email

        if(email.value === '') {
            console.log('Debes insertar tu email');
            messageContainer.appendChild(messageEmail).innerHTML = 'Debes insertar tu email';
            email.classList.add('form__input--error');
            emailIcon.classList.add('form__icon--error');

        }
        else if(email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1) {
            messageContainer.appendChild(messageEmail).innerHTML = 'Tu email no tiene un formato válido';
            email.classList.add('form__input--error');
            emailIcon.classList.add('form__icon--error');
        }

        else {
            console.log('Tu email es: ' + email.value);
            email.classList.remove('form__input--error');
            email.classList.add('form__input--ok');
            emailIcon.classList.remove('form__icon--error');
            emailIcon.classList.add('form__icon--ok');
            messageEmail.classList.add('message--delete');
        }

        // Funcionamiento del campo contraseña

        if(password.value === '' && repeatPassword.value === '') {
            console.log('Debes insertar una contraseña');
            messageContainer.appendChild(messagePassword).innerHTML = 'Debes insertar una contraseña';
            messageContainer.appendChild(messageRepeatPassword).innerHTML = 'Debes repetir la contraseña';
            password.classList.add('form__input--error');
            repeatPassword.classList.add('form__input--error');
            passwordIcon.classList.add('form__icon--error');
            passwordIcon.classList.remove('form__icon--ok');
            repeatPasswordIcon.classList.add('form__icon--error');
            repeatPasswordIcon.classList.remove('form__icon--ok');
        }
        else if(password.value !== repeatPassword.value) {
            console.log('Las contraseñas no son iguales');
            messageContainer.appendChild(messageRepeatPassword).innerHTML = 'Las contraseñas no son iguales';
            password.classList.add('form__input--error');
            repeatPassword.classList.add('form__input--error');
        }

        else {
            console.log('Tu contraseña es: ' + password.value);
            password.classList.remove('form__input--error');
            repeatPassword.classList.remove('form__input--error');
            passwordIcon.classList.remove('form__icon--error');
            passwordIcon.classList.add('form__icon--ok');
            repeatPasswordIcon.classList.remove('form__icon--error');
            repeatPasswordIcon.classList.add('form__icon--ok');
            messagePassword.classList.add('message--delete');
            messageRepeatPassword.classList.add('message--delete');
        }

        // Funcionamiento del campo de serie favorita

        if(shows.value == '') {
            shows.classList.add('form__select--error');
            console.log('Debes elegir tu serie favorita');
            messageContainer.appendChild(messageShow).innerHTML = 'Debes elegir tu serie favorita';
            showsIcon.classList.add('form__icon--error');
            showsIcon.classList.remove('form__icon--ok');
        }
        else {
            shows.classList.remove('form__select--error');
            showsIcon.classList.remove('form__icon--error');
            showsIcon.classList.add('form__icon--ok');
            console.log('Tu serie favorita es: ' + shows.value);
            messageShow.classList.add('message--delete');
        }

        // Funcionamiento del checkbox

        if(!acceptLegal.checked) {
            acceptLegal.classList.add('form__check__input--error');
            console.log('Debes aceptar los aspectos legales');
            messageContainer.appendChild(messageLegal).innerHTML = 'Debes aceptar los aspectos legales';
        }
        else {
            acceptLegal.classList.remove('form__check__input--error');
            messageLegal.classList.add('message--delete');
        }

        // Funcionamiento messageBar

        sectionMessage.classList.add('message-content--show');
    
    }

    emptyInputs();
}