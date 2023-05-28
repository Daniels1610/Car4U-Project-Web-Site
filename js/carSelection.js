const locationEntered = localStorage.getItem('location');
const pickupDate = localStorage.getItem('pickupDate');
const dropoffDate = localStorage.getItem('dropoffDate');
const cardRow = document.getElementById("card_row");
const bodyElement = document.querySelector("body");

const searchCar = (location) => {
    const url = `https://78yx1lyjbb.execute-api.us-east-1.amazonaws.com/dev/cars?location=${cities[location]}`;
    
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            cardRow.innerHTML = ""
            data.Items.forEach(item => {
                let id = JSON.parse(JSON.stringify(item.Id.S));
                let year = JSON.parse(JSON.stringify(item.Year.N));
                let maker = JSON.parse(JSON.stringify(item.Manufacturer.S));
                let model = JSON.parse(JSON.stringify(item.Model.S));
                let type = JSON.parse(JSON.stringify(item.Type.S));
                let price = JSON.parse(JSON.stringify(item.DailyRate.N));
                
                let cardElement = document.createElement("div");
                cardElement.classList.add("col-md-6");
                cardElement.classList.add("mb-4");
                cardElement.innerHTML =
                `
                    <div id=${id} class="card">
                        <img src="imagesCar/${id}.png" class="card-img-top" alt="${model} ${year}">
                        <div class="card-body">
                            <h5 class="card-title">${model} ${year} or Similar</h5>
                            <p class="card-text">Maker: ${maker}</p>
                            <p class="card-text">Type: ${type}</p>
                            <p class="card-text">Price: $${price}</p>
                            <button type="button" class="book-btn btn btn-primary btn-sm btn-block ">Book Now!</button>
                        </div>
                    </div>
                `;
                cardRow.appendChild(cardElement);

                const bookBtnList = document.getElementsByClassName("book-btn");
                for (let i = 0; i < bookBtnList.length; i++){
                    bookBtnList[i].addEventListener("click", function() {
                        booknowAlert();
                    });
                }
            });
        })
        .catch(error => console.log(error));
};

const booknowAlert = () => {
    Swal.fire({
        title: 'Starting your Rent Process',
        html: 'We will start with a Driver Information Form',
        timer: 2000,
        timerProgressBar: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
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
            window.location.href = "driverForm.html";
        }
        })
}

const cities = {
    'Tijuana' : 'TIJ',
    'Mexicali' : 'MXL',
    'Ensenada' : 'ENS'
}

let cityTitle =  document.createElement("h1");
cityTitle.classList.add("text-center");
cityTitle.classList.add("p-4");
cityTitle.textContent = `Cars in ${locationEntered}`;
bodyElement.prepend(cityTitle);


searchCar(locationEntered);

const carsColumns = document.getElementsByClassName("card");



