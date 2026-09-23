// Obtener la imagen SVG
const imagen = document.getElementById("image");

// Obtener los botones
const xsmallBtn = document.getElementById("xsmallBtn");
const smallBtn = document.getElementById("smallBtn");
const mediumBtn = document.getElementById("mediumBtn");
const largeBtn = document.getElementById("largeBtn");
const xlargeBtn = document.getElementById("xlargeBtn");

// Función para modificar el tamaño de la imagen
function cambiarTamano(ancho) {
    imagen.style.width = ancho + "px";
    imagen.style.height = "auto";
}

// Botón X-Pequeño
xsmallBtn.addEventListener("click", function () {
    cambiarTamano(100);
});

// Botón Pequeño
smallBtn.addEventListener("click", function () {
    cambiarTamano(200);
});

// Botón Mediano
mediumBtn.addEventListener("click", function () {
    cambiarTamano(300);
});

// Botón Grande
largeBtn.addEventListener("click", function () {
    cambiarTamano(400);
});

// Botón X-Grande
xlargeBtn.addEventListener("click", function () {
    cambiarTamano(500);
});