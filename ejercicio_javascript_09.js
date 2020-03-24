
let usuario = document.querySelector('#user')  

let contraseña = document.querySelector('#pass')  

let contraseñaRepetida = document.querySelector('#passRepeat')  

let mail = document.querySelector('#mail')  

let desplegable = document.querySelector('#selector')  

let login = document.querySelector('#login')  


login.onclick = clickCallback

function hasNumber(myString) { // contiene un numero
    return /\d/.test(myString);
}
    
function clickCallback(event){ // numero de caracteres menores de 12
    console.log(usuario.length)
    if (usuario.value.length < 13){
        console.log(usuario.value)
    } else{
        console.log('Tas pasao de caracteres')
    }
   
    if (hasNumber(contraseña.value)){
        console.log(contraseña.value)    
   } else {
       console.log('contraseña incorrecta')
   }

   if (contraseñaRepetida.value === contraseña.value){
       console.log(contraseñaRepetida.value)
   } else{
       console.log('la contraseña no es igual que la primera')
   }

let str = mail.value
    
    if (str.split("@").length == 2){
        console.log(mail.value)
    } else {
        console.log('error')
    }
    console.log(desplegable.value)
}

    if (terminos = true){
        console.log('ok')
    } else{
        console.log('no has aceptado los términos')
    }  



