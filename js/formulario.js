const formulario = document.getElementById("RegistroForm");

const patrones = {
  // Usuario: inicia con letra; luego letras/números/_; entre 8 y 30 chars
  usuario: /^[a-zA-Z][a-zA-Z0-9_]{7,29}$/,

  // Email estándar
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

  // Password: mínimo 7 chars, al menos 1 número y 1 símbolo
  password: /^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]).{7,}$/
};

// Mostrar error en el campo
const mostrarError = (id, mensaje) => {
  const elementoError = document.getElementById("err-" + id);
  if (elementoError) elementoError.innerText = mensaje;

  const input = document.getElementById(id);
  if (input) input.classList.add("input-error");
};

// Limpiar errores previos
const limpiarErrores = () => {
  document.querySelectorAll(".error").forEach(el => el.innerText = "");
  document.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error"));
};

// Validación al enviar
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  limpiarErrores();

  let valido = true;

  // Usuario
  const username = document.getElementById("username").value.trim();
  if (!patrones.usuario.test(username)) {
    mostrarError("username", "Usuario inválido: debe iniciar con letra y tener 8–30 caracteres.");
    valido = false;
  }

  // Email
  const email = document.getElementById("email").value.trim();
  if (!patrones.email.test(email)) {
    mostrarError("email", "Email inválido.");
    valido = false;
  }

  // Password
  const password = document.getElementById("password").value;
  if (!patrones.password.test(password)) {
    mostrarError("password", "Contraseña inválida: mínimo 7 caracteres, con al menos un número y un símbolo.");
    valido = false;
  }

  // Confirmar contraseña
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (confirmPassword !== password || confirmPassword === "") {
    mostrarError("confirmPassword", "Las contraseñas no coinciden.");
    valido = false;
  }

  // Si todo está correcto
  if (valido) {
    console.log("Formulario válido. Listo para enviar.");
    // Aquí puedes enviar el formulario con AJAX o:
    // formulario.submit();
  }
});