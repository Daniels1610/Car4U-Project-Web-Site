const locationEntered = localStorage.getItem('location');
const pickupDate = localStorage.getItem('pickupDate');
const dropoffDate = localStorage.getItem('dropoffDate');
const examplBtn = document.querySelector(".show-example-btn");

const searchCar = (location) => {
    const url = `https://78yx1lyjbb.execute-api.us-east-1.amazonaws.com/dev/cars?location=${cities[location]}`;
    
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            let tableData = "";
            data.Items.forEach(item => {
                let year = JSON.stringify(item.Year.N);
                let maker = JSON.stringify(item.Manufacturer.S);
                let model = JSON.stringify(item.Model.S);
                let type = JSON.stringify(item.Type.S);
                let price = JSON.stringify(item.DailyRate.N);
                    
                tableData += 
                `<tr>
                    <td>${JSON.parse(year)}</td>
                    <td>${JSON.parse(maker)}</td>
                    <td>${JSON.parse(model)}</td>
                    <td>${JSON.parse(type)}</td>
                    <td>${JSON.parse(price)}</td>
                </tr>`;
            });
            document.getElementById("table_body").innerHTML = tableData;
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
    })
});


searchCar(locationEntered);