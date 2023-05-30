const selectedCarID = localStorage.getItem('selectedCarID');
const carImage = document.querySelector('.car-image');
const pickupDate = localStorage.getItem('pickupDate');
const dropoffDate = localStorage.getItem('dropoffDate');

const driverInformation = {};

carImage.src = `imagesCar/${selectedCarID}.png`;

$("#btn_continue").click(() => {
  driverInformation.Id = {"S" : `${$("#lastname").val()}${$("#post-code").val()}`};
  driverInformation.Location = {"S" : localStorage.getItem('location')};
  driverInformation.CarID = {"S" : selectedCarID};
  driverInformation.PickDate = {"S" : pickupDate};
  driverInformation.DropDate = {"S" : dropoffDate};
  driverInformation.Firstname = {"S" : $("#name").val()};
  driverInformation.Lastname = {"S" : $("#lastname").val()};
  driverInformation.Email = {"S" : $("#email").val()};
  driverInformation.Phone = {"S" : $("#phone").val()};
  driverInformation.Birthdate = {"S" : $("#date").val()};
  driverInformation.Address = {"S" : `${$("#street").val()}`};
  driverInformation.City = {"S" : $("#city").val()};
  driverInformation.State = {"S" : $("#state").val()};
  driverInformation.PostalCode = {"S" : $("#post-code").val()};

  sessionStorage.setItem("driverInformation", JSON.stringify(driverInformation));
});

const searchCarByID = (carID) => {
  const url = `https://azp9iify5c.execute-api.us-east-1.amazonaws.com/develop/cars/${carID}`;
  
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
      const rentDays = dailyRateByDays(pickupDate, dropoffDate);

      $(".car-model-text").text(`${carData.model} o similar`);
      $(".pick-location").text(`${carData.location}`);
      $(".drop-location").text(`${carData.location}`);
      $(".car-price").text(`$${carData.price * rentDays}`);
      $(".car-rent-days").text(`${rentDays}`);
      $(".car-price-unit").text(`$${carData.price}`);
      sessionStorage.setItem('carData', JSON.stringify(carData));

    })
    .catch(error => console.log(error));

    
};

const reformatDate = (dateString) => {
  var dateParts = dateString.split("/"); var month = dateParts[0];
  var day = dateParts[1]; var year = dateParts[2];
  return year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2);
}

const dailyRateByDays = (pickDate, dropDate) => {
  const pickDateF = new Date(reformatDate(pickDate));
  const dropDateF = new Date(reformatDate(dropDate));
  const timeDiff = Math.abs(dropDateF.getTime() - pickDateF.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;

}

$(".pick-date").text(`${pickupDate}`)
$(".drop-date").text(`${dropoffDate}`)
searchCarByID(selectedCarID);

