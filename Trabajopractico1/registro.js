document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario para manejarlo manualmente

    // Obtener los valores ingresados
    const nombre = document.getElementById('txtNombre').value;
    const apellido = document.getElementById('txtApellido').value;
    const email = document.getElementById('txtEmail').value;
    const contraseña = document.getElementById('txtContraseña').value;
    const fechaNacimiento = document.getElementById('txtFechaNacimiento').value;

    // Almacenar los datos en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('email', email);
    localStorage.setItem('contraseña', contraseña);
    localStorage.setItem('fechaNacimiento', fechaNacimiento);

    alert('Usuario registrado exitosamente!');

    // Redirigir a la página de login
    window.location.href = 'sesion/login.html'; 
});