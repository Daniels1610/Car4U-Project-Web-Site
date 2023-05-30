const selected_carId  = localStorage.getItem("selectedCarID");

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
    $('#btn_continue').click(function() {
      Swal.fire({
        title: 'Saving driver information',
        timer: 1000,
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
          window.location.href = 'checkout.html';
        }
      });
    });
  });

// $('#checkout_button').click(function(){
// Swal.fire({
//     title: 'Summary Order!',
//     allowEscapeKey: false,
//     allowOutsideClick: false,
//     html: '<div style="display: flex;"><div style="flex: 1;"><b class="pick-location">Pick Up:</b><br><style="flex: 1;"><b class="drop-location">Drop Off</b><br></div></div><br><b>Unlimited mileage</b> : Included <br> <b>Basic Protection Package</b>: Included <br><br> <h4 style="font-weight: bold; color: green">TOTAL PRICE:</h4> $10,000 DLLS',
//     confirmButtonText: 'Pay now!',
//     confirmButtonColor: 'green',
//     showDenyButton: true,
//     denyButtonText: 'Cancel',
//     imageUrl: `imagesCar/${selected_carId}.png`,
//     imageWidth: 300,
//     imageHeight: 200,
//     footer: '<span style="color: red"> Please check the order in detail before renting</span>'

// $('#checkout_button').click(function(){
//   Swal.fire({
//     title: 'Summary Order!',
//     allowEscapeKey: false,
//     allowOutsideClick: false,
//     html: '<div style="display: flex;"><div style="flex: 1;"><b class="pick-location">Pick Up:</b><br><style="flex: 1;"><b class="drop-location">Drop Off</b><br></div></div><br><b>Unlimited mileage</b> : Included <br> <b>Basic Protection Package</b>: Included <br><br> <h4 style="font-weight: bold; color: green">TOTAL PRICE:</h4> $10,000 DLLS',
//     confirmButtonText: 'Pay now!',
//     confirmButtonColor: 'green',
//     showDenyButton: true,
//     denyButtonText: 'Cancel',
//     imageUrl: `imagesCar/${selected_carId}.png`,
//     imageWidth: 300,
//     imageHeight: 200,
//     footer: '<span style="color: red"> Please check the order in detail before renting</span>'

// }).then((result)=>{
//     if(result.isConfirmed){
//         Swal.fire({
//             title: 'Processing your Rent',
//             html: 'Give us a moment, we are processing your Rent',
//             timer: 2000,
//             timerProgressBar: true,
//             allowOutsideClick: false,
//             allowEscapeKey: false,
//             didOpen: () => {
//                 Swal.showLoading()
//                 timerInterval = setInterval(() => {
//                 }, 100)
//             },
//             willClose: () => {
//                 clearInterval(timerInterval)
//             }
//             }).then((result) => {
//             if (result.dismiss === Swal.DismissReason.timer) {
//                 Swal.fire({
//                     timerProgressBar: true,
//                     allowOutsideClick: false,
//                     title: 'Rent Completed',
//                     html: 'Your Rent has been Successful<br>Thank you for Renting on Car4U!',
//                     icon: 'success',
//                     confirmButtonText : 'OK'
//                 }).then((result) => {
//                     if(result.isConfirmed) {
//                         window.location.href = "index.html"
//                     }
//                 })
//             } else {return;}
//             })
        
//     }
// })
// });