// Función para mostrar productos según la categoría
function mostrarProductosPorCategoria(categoria) {
    const container = document.querySelector('.contenedorItem');

    // Cargar el archivo JSON
    fetch('../productos.json')
        .then(response => response.json())
        .then(data => {
            const products = data.productos;

            // Filtrar los productos por categoría
            const filteredProducts = products.filter(product => product.categoria === categoria);

            // Limpiar el contenedor antes de mostrar los productos filtrados
            container.innerHTML = '';

            // Iterar sobre los productos filtrados y generar las tarjetas
            filteredProducts.forEach(product => {
                const item = document.createElement('div');
                item.className = 'item'; // Clase para el contenedor de la tarjeta

                // Crear imagen
                const image = document.createElement('img');
                image.src = `../imagenes/${product.imagen}`; // Ruta de la imagen
                image.alt = product.nombre; // Texto alternativo para la imagen

                // Crear título
                const title = document.createElement('h3');
                title.textContent = product.nombre;

                // Crear descripción
                const description = document.createElement('p');
                description.textContent = product.descripcion;

                // Crear precio
                const price = document.createElement('p');
                price.textContent = `$${product.precio.toFixed(2)}`; // Formatear a dos decimales

                // Crear botón de añadir al carrito
                const addButton = document.createElement('button');
                addButton.textContent = 'Añadir al carrito';
                addButton.onclick = () => {
                    console.log(`${product.nombre} añadido al carrito`);
                };

                // Crear botón de eliminar
                const removeButton = document.createElement('button');
                removeButton.className = 'eliminar';
                removeButton.textContent = 'Eliminar del carrito';
                removeButton.onclick = () => {
                    console.log(`${product.nombre} eliminado del carrito`);
                };

                // Agregar todos los elementos a la tarjeta
                item.appendChild(image);
                item.appendChild(title);
                item.appendChild(description); // Añadir descripción al DOM
                item.appendChild(price);
                item.appendChild(addButton);
                item.appendChild(removeButton);

                // Agregar la tarjeta al contenedor
                container.appendChild(item);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
}