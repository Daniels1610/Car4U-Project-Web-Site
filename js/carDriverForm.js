const selectedCarID = localStorage.getItem('selectedCarID');
const carImage = document.querySelector('.car-image');

carImage.src = `imagesCar/${selectedCarID}.png`;


