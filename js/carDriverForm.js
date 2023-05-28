const selectedCarID = localStorage.getItem('selectedCarID');
const carImage = document.querySelector('.car-image');

carImage.src = `imagesCar/${selectedCarID}.png`;

$(document).ready(function() {
    $('#btn_driverForm').click(function(e) {
      e.preventDefault(); // Evita que se realice la acción predeterminada del enlace

      Swal.fire({
        icon: 'warning',
        title: 'Are you sure to leave?',
        text: "You won't be able to recover the information!",
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'index.html'; 
        }
      });
    });
  });