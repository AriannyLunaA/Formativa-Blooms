document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DEL FORMULARIO Y VALIDACIONES ---
    const formulario = document.getElementById("formulario-registro");
    const passwordInput = document.getElementById("password");
    const sugerenciaPass = document.getElementById("sugerencia-password");

    passwordInput.addEventListener("input", (e) => {
        const valor = e.target.value;
        let sugerencias = [];

        if (valor.length < 8) sugerencias.push("mínimo 8 caracteres");
        if (!/[A-Z]/.test(valor)) sugerencias.push("una mayúscula");
        if (!/[0-9]/.test(valor)) sugerencias.push("un número");

        if (sugerencias.length > 0) {
            sugerenciaPass.style.color = "var(--borde-solido)"; 
            sugerenciaPass.textContent = "Sugerencia: Falta " + sugerencias.join(", ");
        } else {
            sugerenciaPass.style.color = "var(--texto-oscuro)"; 
            sugerenciaPass.textContent = "¡Contraseña segura!";
        }
        
        if (valor === "") sugerenciaPass.textContent = "";
    });

    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); 

        let isValid = true;
        document.querySelectorAll(".mensaje-validacion").forEach(el => el.textContent = "");

        const nombre = document.getElementById("nombre").value.trim();
        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        
        if (!nombre) {
            document.getElementById("error-nombre").textContent = "El nombre es obligatorio.";
            isValid = false;
        } else if (!regexNombre.test(nombre)) {
            document.getElementById("error-nombre").textContent = "El nombre solo debe contener letras y espacios.";
            isValid = false;
        }

        const email = document.getElementById("email").value.trim();
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
            document.getElementById("error-email").textContent = "El correo electrónico es obligatorio.";
            isValid = false;
        } else if (!regexEmail.test(email)) {
            document.getElementById("error-email").textContent = "Ingrese un formato de correo válido.";
            isValid = false;
        }

        const password = document.getElementById("password").value;
        if (!password || password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            document.getElementById("error-password").textContent = "La contraseña no cumple con los requisitos mínimos.";
            isValid = false;
        }

        const plan = document.getElementById("plan").value;
        if (!plan) {
            document.getElementById("error-plan").textContent = "Debe seleccionar un diseño de suscripción.";
            isValid = false;
        }

        if (isValid) {
            alert(`Cualquier instante se vuelve inolvidable cuando la belleza llama a tu puerta. Registro exitoso, ${nombre}.`);
            formulario.reset(); 
            sugerenciaPass.textContent = ""; 
        }
    });
});