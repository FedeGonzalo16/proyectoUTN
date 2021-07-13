
/* Vars Sign-Up */
const userSignup = document.getElementById('username-signup');
const email = document.getElementById('email');
const passwordSignup = document.getElementById('password-signup');
const confirmPassword = document.getElementById('confirm-password');
const errorSignup = document.getElementById('error-signup');
const form = document.getElementById('form-signup');

/* Validaciones Sign-Up*/
function sendFormSignup(){
    console.log('Enviando formulario...');

    let mnsjsError = [];

    if(userSignup.value === null || userSignup.value === '') {
        mnsjsError.push('Ingresa un nombre de Usuario');
    }
    if(email.value === null || email.value === '') {
        mnsjsError.push('Ingresa un Correo Electrónico');
    }
    if(passwordSignup.value === null || passwordSignup.value === '') {
        mnsjsError.push('Ingresa una contraseña');
    }
    if(confirmPassword.value !== passwordSignup.value) {
        mnsjsError.push('Las contraseñas no coinciden');
    }
    else {
        window.location="/views/sign-in-up.html";
        alert('Registro exitoso');
    }
    errorSignup.innerHTML = mnsjsError.join(', ');
};





