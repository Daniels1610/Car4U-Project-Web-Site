const selectedCarID = localStorage.getItem('selectedCarID');
const carImage = document.querySelector('.car-image');

const driverInformation = {};

carImage.src = `imagesCar/${selectedCarID}.png`;

$("#btn_continue").click(() => {
  driverInformation.name = $("#name").val();
  driverInformation.lastname = $("#lastname").val();
  driverInformation.email = $("#email").val();
  driverInformation.phone = $("#phone").val();
  driverInformation.date = $("#date").val();
  driverInformation.street = $("#street").val();
  driverInformation.city = $("#city").val();
  driverInformation.state = $("#state").val();
  driverInformation.postCode = $("#post-code").val();

  localStorage.setItem("driverInformation", driverInformation);
});

const searchCarByID = (carID) => {
  const url = `https://azp9iify5c.execute-api.us-east-1.amazonaws.com/dev/cars/${carID}`;
  
  fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
      let model = JSON.parse(JSON.stringify(data.Item.Model.S));
      let year = JSON.parse(JSON.stringify(data.Item.Year.N));
      let location = JSON.parse(JSON.stringify(data.Item.Location.S));
      let price = JSON.parse(JSON.stringify(data.Item.DailyRate.N));
      
      const carData = {model : model, year : year, location : location, price : price};

      $(".car-model-text").text(`${carData.model} o similar`);
      $(".pick-location").text(`${carData.location}`);
      $(".drop-location").text(`${carData.location}`);
      $(".car-price").text(`$${carData.price}`);

    })
    .catch(error => console.log(error));

    
};

searchCarByID(selectedCarID);

