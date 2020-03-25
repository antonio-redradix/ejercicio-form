//MAXIMO CARACTERES
function usuario() {
    let user =  document.getElementById('nombre')//creo elemento  de nombre de usuario
    user.addEventListener('input',function(){
        if (this.value.length > 12)
            this.value = this.value.slice(0,12);//asignacion de un principio y un fin

    })

}usuario()



//ASIGNACION DE CONTRASEÑA--------------------------------

function password() {

    let contra = document.getElementById('cont')
    let claveok = /[A-Z]{1}|[a-z]+|[0-9]/


    contra.addEventListener('input', function () {
        if ((claveok.test(this.value) && this.value.length <= 10)) {
            this.value = this.value.slice(0, 10);
            console.log("Correcto")
        }

        else {
            console.log("incorrecto")
        }

    });


} password()

function confirmpassword() {

    let cont = document.getElementById('cont')
    let cont2 = document.getElementById('cont2')
    cont2.addEventListener('input', function () {
        if(cont.value ===cont2.value){
            console.log("es correcto")

        }else{
            console.log("son distintos, repite")
        }

    });
}
confirmpassword()

//ASIGNACION DE     EMAIL--------------------------------

function confirmemail() {

    let email = document.getElementById('email')
    let estructura = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/


    email.addEventListener('input', function () {
        if (estructura.test(this.value)) {
            
            console.log("Correcto")
        }

        else {
            console.log("incorrecto")
        }

    });


} confirmemail()

