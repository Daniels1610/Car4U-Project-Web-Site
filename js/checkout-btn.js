// TODO: BOTON QUE VA DESPUÉS DEL CHECKOUT

$('#checkout_button').click(function(){
    Swal.fire({
        title: 'Summary Order!',
        html: '<div style="display: flex;"><div style="flex: 1;"><b>Delivery:</b><br>Tijuana<br>27, May 2023</div><div style="flex: 1;"><b>Return:</b><br>Tijuana<br>30, May 2023</div></div> <br> <b>Unlimited mileage</b> : Included <br> <b>Basic Protection Package</b>: Included <br><br> <h4 style="font-weight: bold; color: green">TOTAL PRICE:</h4> $10,000 DLLS',
        confirmButtonText: 'Pay now!',
        confirmButtonColor: 'green',
        showDenyButton: true,
        denyButtonText: 'Cancel',
        imageUrl: 'imagesCar/CSS2010G1.png',
        imageWidth: 300,
        imageHeight: 150,
        footer: '<span style="color: red"> Please check the order in detail before renting</span>'
    }).then((result)=>{
        if(result.isConfirmed){
            //añadir un timer y agregar alerta de success
            
        }
    })
});