$(document).ready(function() {
    $('#btn_car4u').click(function(e) {
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

$(document).ready(function() {
$('#btn_car4u_selection').click(function(e) {
    e.preventDefault(); // Evita que se realice la acción predeterminada del enlace

    Swal.fire({
    icon: 'warning',
    title: 'Are you sure to leave?',
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

$(document).ready(function() {
    $('#btn_continue').submit(function(e) {
        e.preventDefault(); 

        var inputFecha = $('#date').val();
        var fechaNacimiento = new Date(inputFecha);
        var fechaActual = new Date();

        var fechaMinima = new Date();
        fechaMinima.setFullYear(fechaMinima.getFullYear() - 18);

       
        if (fechaNacimiento > fechaMinima) {
            Swal.fire({
                title: 'Error',
                text: 'Debes tener al menos 18 años.',
                icon: 'error'
            });
            return;
        }

        if (fechaNacimiento > fechaActual) {
            Swal.fire({
                title: 'Error',
                text: 'La fecha de nacimiento no puede ser posterior a la fecha actual.',
                icon: 'error'
            });
            return;
        }

        Swal.fire({
            title: 'Saving driver information',
            html: 'We will start with a Checkout Form',
            timer: 2000,
            timerProgressBar: true,
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {}, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                window.location.href = "checkout.html";
            }
        });
    });
});


// $(document).ready(function() {
// $('#checkout_button').submit(function(e) {
//         e.preventDefault(); 
  
//         Swal.fire({
//             title: 'Processing your Rent',
//             html: 'Give us a moment, we are processing your Rent',
//             timer: 2000,
//             timerProgressBar: true,
//             allowOutsideClick: false,
//             allowEscapeKey: false,
//             didOpen: () => {
//                 Swal.showLoading();
//                 timerInterval = setInterval(() => {}, 100);
//             },
//             willClose: () => {
//                 clearInterval(timerInterval);
//             }
//         }).then((result) => {
//             if (result.dismiss === Swal.DismissReason.timer) {
//                 Swal.fire({
//                     timerProgressBar: true,
//                     allowOutsideClick: false,
//                     title: 'Rent Completed',
//                     html: 'Your Rent has been Successful<br>Thank you for Renting on Car4U!',
//                     icon: 'success',
//                     confirmButtonText: 'OK'
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         window.location.href = 'index.html';
//                     }
//                 });
//             } else {
//                 return;
//             }
//         });
//     });
// });

$(document).ready(function() {
    $('#payNowButton').click(function() {

        Swal.fire({
            title: 'Processing your Rent',
            html: 'Give us a moment, we are processing your Rent',
            timer: 2000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {}, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire({
                    timerProgressBar: true,
                    allowOutsideClick: false,
                    title: 'Rent Completed',
                    html: 'Your Rent has been Successful<br>Thank you for Renting on Car4U!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = 'index.html';
                    }
                });
            } else {
                return;
            }
        });
    });
});

$(document).ready(function() {
    $('#cancelButton').click(function() {
        $('#exampleModal').modal('hide');
    });
});




