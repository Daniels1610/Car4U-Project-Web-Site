const selectedCarID = localStorage.getItem('selectedCarID');
const carImage = document.querySelector('.car-image');

carImage.src = `imagesCar/${selectedCarID}.png`;

// DRIVER INFORMATION
const driverInformation = {
  name: "",
  lastname: "",
  email: "",
  phone : "",
  date : "", 
  street : "",
  city : "",
  state : "",
  postCode : ""
};

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
