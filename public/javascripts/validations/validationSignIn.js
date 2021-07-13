
/* Vars Sign-In */
const username = document.getElementById('username');
const password = document.getElementById('password');
const errorForm = document.getElementById('error-form');

/* Validaciones Sign in*/
function sendForm() {
    console.log('Enviando formulario...');

    let messagesErr = []; /* Almacena los mensajes de error */

    if(username.value === null || username.value === '') {
        messagesErr.push('Ingresa tu Nombre de Usuario');
    }
    if(password.value === null || password.value === '') {
        messagesErr.push('Ingresa tu Contraseña');
    }
    else {
        window.location="/index.html";
        alert('Bienvenido');
    }
    errorForm.innerHTML = messagesErr.join(', '); /* Mostrar los mensajes de Error */
    return false; /* Una forma de que el formulario no se envíe por defecto. */
};



