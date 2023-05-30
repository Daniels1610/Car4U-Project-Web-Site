const driverInfo = localStorage.getItem('driverInformation');
// CREDIT CARD INPUT AND VALIDATION
// Get the input field
const cardNumberInput = document.getElementById('cc-number');

// Add event listener for input changes
cardNumberInput.addEventListener('input', formatCardNumber);

// Function to format the card number
function formatCardNumber() {
    let value = cardNumberInput.value;

    value = value.replace(/\D/g, '');

    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    cardNumberInput.value = value;
    driverInfo.CreditCard = {"S" : cardNumberInput.value.slice(15)};
}

const selected_carId = localStorage.getItem("selectedCarID"); 

const carImage2 = document.querySelector('.carImage');

carImage2.src = `imagesCar/${selected_carId}.png`;

// const selectedCarID = localStorage.getItem('selectedCarID');
// const carImage = document.querySelector('.car-image');
// carImage.src = `imagesCar/${selectedCarID}.png`;


$(document).ready(function() {
    $('#checkout_button').submit(function(e) {
            e.preventDefault(); 
        Swal.fire({
            title: 'Summary Order!',
            allowEscapeKey: false,
            allowOutsideClick: false,
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
                addInfoToRents(driverInfo);
                Swal.fire({
                    title: 'Processing your Rent',
                    html: 'Give us a moment, we are processing your Rent',
                    timer: 2000,
                    timerProgressBar: true,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    didOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                    }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        addInfoToRents(driverInfo);
                        Swal.fire({
                            timerProgressBar: true,
                            allowOutsideClick: false,
                            title: 'Rent Completed',
                            html: 'Your Rent has been Successful<br>Thank you for Renting on Car4U!',
                            icon: 'success',
                            confirmButtonText : 'OK'
                        }).then((result) => {
                            if(result.isConfirmed) {
                                window.location.href = "index.html"
                            }
                        })
                    } else {return;}
                    })
                
            }
        })
        });
    });


const addInfoToRents = (data) => {
    const url = `http://ec2-54-196-205-117.compute-1.amazonaws.com/rents`;
    
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => {
            return response.json();
        })
        .then(res => {
            console.log(res);
            console.log(res.Id);
        })
        .catch(error => console.log(error));
}

