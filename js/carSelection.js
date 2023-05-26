const locationEntered = localStorage.getItem('location');
const examplBtn = document.querySelector(".show-example-btn");
console.log(locationEntered);

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

$('#btn_summary').click(function(){
    Swal.fire({
        icon: 'warning',
        title: 'Summary Order!',
        html: '<b>Limited mileage</b> : Included <br> <b>Basic Protection Package</b>: Included <br><br> <h4 style="font-weight: bold">TOTAL PRICE:</h4> $10,000',
        confirmButtonText: 'Rent a car',
        // imageUrl: 'imagesCar/CSS2010G1.png',
        // imageWidth: 400,
        // imageHeight: 200,
        // imageAlt: 'Custom image'
        footer: '<span style="color: red"> Please check the order in detail before renting</span>'
    })
});


searchCar(locationEntered);