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
                    <div class="card">
                        <img src="imagesCar/${id}.png" class="card-img-top" alt="${model} ${year}">
                        <div class="card-body">
                            <h5 class="card-title">${model} ${year} or Similar</h5>
                            <p class="card-text">Maker: ${maker}</p>
                            <p class="card-text">Type: ${type}</p>
                            <p class="card-text">Price: $${price}</p>
                            <button type="button" class="btn btn-primary btn-sm btn-block" id="btn_summary">Book Now!</button>
                        </div>
                    </div>
                `;
                cardRow.appendChild(cardElement);
            });
        })
        .catch(error => console.log(error));
};

const cities = {
    'Tijuana' : 'TIJ',
    'Mexicali' : 'MXL',
    'Ensenada' : 'ENS'
}

// TODO: BOTON QUE VA DESPUÉS DEL CHECKOUT
$('#btn_summary').click(function(){
    Swal.fire({
        icon: 'warning',
        title: 'Summary Order!',
        html: '<b>Limited mileage</b> : Included <br> <b>Basic Protection Package</b>: Included <br><br> <h4 style="font-weight: bold">TOTAL PRICE:</h4> $10,000',
        confirmButtonText: 'Save',
        showDenyButton: true,
        denyButtonText: 'Cancel',
        imageUrl: 'imagesCar/CSS2010G1.png',
        imageWidth: 300,
        imageHeight: 150,
        footer: '<span style="color: red"> Please check the order in detail before renting</span>'
    })
});

let cityTitle =  document.createElement("h1");
cityTitle.classList.add("text-center");
cityTitle.classList.add("p-4");
cityTitle.textContent = `Cars in ${locationEntered}`;
bodyElement.prepend(cityTitle);

searchCar(locationEntered);