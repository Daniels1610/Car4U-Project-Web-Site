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

searchCar(locationEntered);