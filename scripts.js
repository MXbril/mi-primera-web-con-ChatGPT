document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el formulario de registro
    const registroForm = document.querySelector("#registro form");

    // Agrega un event listener para el evento submit del formulario
    registroForm.addEventListener("submit", function(event) {
        // Evita que el formulario se envíe de forma predeterminada
        event.preventDefault();

        // Obtiene los valores de los campos del formulario
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Aquí podrías hacer algo con los datos del formulario, como enviarlos a un servidor o mostrarlos en la página
        // Por ejemplo, podrías mostrarlos en la consola del navegador
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Contraseña:", password);

        // Muestra un mensaje de registro exitoso en la página
        const mensajeRegistro = document.createElement("p");
        mensajeRegistro.textContent = "¡Registro exitoso!";
        registroForm.appendChild(mensajeRegistro);

        // Limpia los campos del formulario
        registroForm.reset();
    });
});



