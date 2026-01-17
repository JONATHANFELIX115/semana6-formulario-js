const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

function validarFormulario() {
    let valido = true;

    // Nombre
    if (nombre.value.length < 3) {
        document.getElementById("errorNombre").textContent = "Mínimo 3 caracteres";
        nombre.className = "invalido";
        valido = false;
    } else {
        document.getElementById("errorNombre").textContent = "";
        nombre.className = "valido";
    }

    // Correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo.value)) {
        document.getElementById("errorCorreo").textContent = "Correo no válido";
        correo.className = "invalido";
        valido = false;
    } else {
        document.getElementById("errorCorreo").textContent = "";
        correo.className = "valido";
    }

    // Contraseña
    const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (password.value.length < 8 || !regexPassword.test(password.value)) {
        document.getElementById("errorPassword").textContent = "Debe tener 8 caracteres, un número y un símbolo";
        password.className = "invalido";
        valido = false;
    } else {
        document.getElementById("errorPassword").textContent = "";
        password.className = "valido";
    }

    // Confirmar contraseña
    if (confirmPassword.value !== password.value) {
        document.getElementById("errorConfirm").textContent = "Las contraseñas no coinciden";
        confirmPassword.className = "invalido";
        valido = false;
    } else {
        document.getElementById("errorConfirm").textContent = "";
        confirmPassword.className = "valido";
    }

    // Edad
    if (edad.value < 18) {
        document.getElementById("errorEdad").textContent = "Debe ser mayor de edad";
        edad.className = "invalido";
        valido = false;
    } else {
        document.getElementById("errorEdad").textContent = "";
        edad.className = "valido";
    }

    btnEnviar.disabled = !valido;
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", validarFormulario);
});

document.getElementById("registroForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Formulario validado correctamente ✔️");
});

