document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.contenedorItem');

    // Cargar el archivo JSON
    fetch('./productos.json') // Ajusta la ruta si es necesario
        .then(response => response.json())
        .then(data => {
            const products = data.productos; // Obtener el array de productos

            // Obtener todas las categorías
            const categorias = [...new Set(products.map(product => product.categoria))];

            categorias.forEach(categoria => {
                // Filtrar productos por categoría
                const productosFiltrados = products.filter(product => product.categoria === categoria);

                // Seleccionar los primeros 2 o 3 productos por categoría
                const productosLimitados = productosFiltrados.slice(0, 3); // Tomamos los primeros 3 productos

                // Crear una sección para cada categoría
                const categorySection = document.createElement('div');
                categorySection.className = 'categoria';
                const categoryTitle = document.createElement('h2');
                categoryTitle.textContent = categoria;
                categorySection.appendChild(categoryTitle);

                productosLimitados.forEach(product => {
                    const item = document.createElement('div');
                    item.className = 'item'; // Clase para el contenedor de la tarjeta

                    // Crear imagen
                    const image = document.createElement('img');
                    image.src = `./imagenes/${product.imagen}`;
                    image.alt = product.nombre;

                    // Crear título
                    const title = document.createElement('h3');
                    title.textContent = product.nombre;

                    // Crear descripción
                    const description = document.createElement('p');
                    description.textContent = product.descripcion;

                    // Crear precio
                    const price = document.createElement('p');
                    price.textContent = `$${product.precio.toFixed(2)}`;

                    // Crear botón de añadir al carrito
                    const addButton = document.createElement('button');
                    addButton.textContent = 'Añadir al carrito';

                    // Agregar elementos a la tarjeta
                    item.appendChild(image);
                    item.appendChild(title);
                    item.appendChild(description);
                    item.appendChild(price);
                    item.appendChild(addButton);

                    // Agregar la tarjeta a la sección de categoría
                    categorySection.appendChild(item);
                });

                // Agregar la sección de categoría al contenedor principal
                container.appendChild(categorySection);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});