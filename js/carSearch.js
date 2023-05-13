const searchBtn = document.querySelector(".search-btn");
const locationInput = document.getElementById("location");

searchBtn.addEventListener("click", () => {
    const url = `https://78yx1lyjbb.execute-api.us-east-1.amazonaws.com/dev/cars?location=${cities[locationInput.value]}`;
    
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            // document.querySelector(".queryResult").textContent = data.Items;
            console.log(data.Items)
        })
        .catch(error => console.log(error));
})

const cities = {
    'Tijuana' : 'TIJ',
    'Mexicali' : 'MXL',
    'Ensenada' : 'ENS'
}