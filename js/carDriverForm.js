const selectedCarID = localStorage.getItem('selectedCarID');
const carImage = document.querySelector('.car-image');
const pickupDate = localStorage.getItem('pickupDate');
const dropoffDate = localStorage.getItem('dropoffDate');

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

  sessionStorage.setItem("driverInformation", JSON.stringify(driverInformation));
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
      const rentDays = dailyRateByDays(pickupDate, dropoffDate);

      $(".car-model-text").text(`${carData.model} o similar`);
      $(".pick-location").text(`${carData.location}`);
      $(".drop-location").text(`${carData.location}`);
      $(".car-price").text(`$${carData.price * rentDays}`);

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

    // Validar que no se supere la fecha actual
    if (fechaNacimiento > fechaActual) {
        alert("La fecha de nacimiento no puede ser posterior a la fecha actual.");
        return false;
    }
}
