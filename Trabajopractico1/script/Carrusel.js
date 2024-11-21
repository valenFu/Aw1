document.addEventListener("DOMContentLoaded", function() {
    // Cambia la ruta para apuntar a la carpeta 'datos'
    fetch('../datos/Productos.json')
        .then(response => response.json())
        .then(data => {
            // Llamamos a la función para crear el carrusel
            crearCarrusel(data.productos);
        })
        .catch(error => {
            console.error("Error al cargar los productos:", error);
        });
});

let currentIndex = 0; // Índice actual del producto

function crearCarrusel(productos) {
    const carruselContainer = document.querySelector('.carrusel');
    
    // Itera sobre los productos y agrega cada uno al carrusel
    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');

        const imagen = document.createElement('img');
        imagen.src = `../imagenes/${producto.imagen}`;
        imagen.alt = producto.nombre;

        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;

        const precio = document.createElement('p');
        precio.textContent = `$${producto.precio}`;

        const descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;

        const boton = document.createElement('button');
        boton.textContent = "Ver más detalles";
        boton.onclick = () => verDetalleProducto(producto.id);

        // Añadir todos los elementos al contenedor del producto
        divProducto.appendChild(imagen);
        divProducto.appendChild(nombre);
        divProducto.appendChild(precio);
        divProducto.appendChild(descripcion);
        divProducto.appendChild(boton);

        // Añadir el producto al carrusel
        carruselContainer.appendChild(divProducto);
    });
}

function verDetalleProducto(id) {
    // Puedes redirigir a una página de detalles del producto o mostrar un modal
    console.log("Ver detalles del producto con id:", id);
}

// Funciones para mover el carrusel
function moverCarrusel(direction) {
    const productos = document.querySelector('.carrusel');
    const totalProductos = document.querySelectorAll('.producto').length;
    
    // Se actualiza el índice en función de la dirección
    currentIndex += direction;

    // Si el índice es menor que 0, lo ponemos en el último producto
    if (currentIndex < 0) {
        currentIndex = totalProductos - 1;
    } else if (currentIndex >= totalProductos) {
        currentIndex = 0;
    }

    // Calculamos el desplazamiento necesario en porcentaje
    const desplazamiento = -currentIndex * 100 / totalProductos;

    // Movemos el carrusel
    productos.style.transform = `translateX(${desplazamiento}%)`;
}