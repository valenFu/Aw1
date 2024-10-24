document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores ingresados
    const nombre = document.getElementById('txtNombre').value;
    const apellido = document.getElementById('txtApellido').value;
    const email = document.getElementById('txtEmail').value;
    const contraseña = document.getElementById('txtContraseña').value;

    // Obtener los datos almacenados en localStorage
    const storedNombre = localStorage.getItem('nombre');
    const storedApellido = localStorage.getItem('apellido');
    const storedEmail = localStorage.getItem('email');
    const storedContraseña = localStorage.getItem('contraseña');

    // Verificar las credenciales
    if (nombre === storedNombre && apellido === storedApellido && email === storedEmail && contraseña === storedContraseña) {
        alert('Inicio de sesión exitoso!');
        // Redirigir al archivo home.html
        window.location.href = '../home.html'; 
    } else {
        alert('Nombre, apellido, email o contraseña incorrectos.');
    }
});