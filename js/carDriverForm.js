const selectedCarID = localStorage.getItem('selectedCarID');
const carImage = document.querySelector('.car-image');

carImage.src = `imagesCar/${selectedCarID}.png`;

function validarFecha() {
    var inputFecha = document.getElementById("date").value;
    var fechaNacimiento = new Date(inputFecha);
    var fechaActual = new Date();

    // Obtener la fecha hace 18 años
    var fechaMinima = new Date();
    fechaMinima.setFullYear(fechaMinima.getFullYear() - 18);

    // Validar la edad mínima
    if (fechaNacimiento > fechaMinima) {
        alert("Debes tener al menos 18 años.");
        return false;
    }

    // Validar que no se supere la fecha actual
    if (fechaNacimiento > fechaActual) {
        alert("La fecha de nacimiento no puede ser posterior a la fecha actual.");
        return false;
    }
}
