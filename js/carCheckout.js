const driverInfo = JSON.parse(sessionStorage.getItem('driverInformation'));
const carData2 = JSON.parse(sessionStorage.getItem('carData'));
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
                addInfoToRents(driverInfo);
                sendEmail();
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

const sendEmail = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let rentDetailsMessage = `
        Thank you ${driverInfo.Firstname.S} for renting in CAR4U!\n
        \n
        Full Name: ${driverInfo.Firstname.S} ${driverInfo.Lastname.S}\n
        Model: ${carData2.model}\n
        Year: ${carData2.year}\n
        Maker: ${carData2.maker}\n
        \n
        Location: ${driverInfo.Location.S}\n 
        PickUp Date:  ${driverInfo.PickDate.S}\n
        DropOff Date: ${driverInfo.DropDate.S}
    `;

    var raw = JSON.stringify({
      email: `${driverInfo.Email.S}`,
      subject: "Rent Details",
      message: rentDetailsMessage,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://a9169svduc.execute-api.us-east-2.amazonaws.com/develop/contact/",
      requestOptions
    )
      .then((response) => {
        return response.text()
    })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
}

