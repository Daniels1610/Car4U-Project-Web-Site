const searchBtn = document.querySelector(".search-btn");
const locationInput = document.getElementById("location");
const pickupInput = document.querySelector(".pickup-Date"); 
const dropoffInput = document.querySelector(".dropoff-Date");
let timerInterval;

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const locationValue = locationInput.value;
    const pickupValue = pickupInput.value;
    const dropoffValue = dropoffInput.value;

    if (!pickupValue | !dropoffValue) {
        dateAlert(); return;
    }

    if(!dropoffDateValidation(pickupValue, dropoffValue)) {
        dateExpiredAlert(); return;
    } 

    localStorage.setItem('location', locationValue);
    localStorage.setItem('pickupDate', pickupValue);
    localStorage.setItem('dropoffDate', dropoffValue);
    searchAlert();
});

const searchAlert = () => {
    Swal.fire({
        title: 'Searching Car',
        html: 'Looking for your perfect deal',
        timer: 2000,
        timerProgressBar: true,
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            window.location.href = "selection.html";
        }
        })
};

const dateAlert = () => {
    Swal.fire(
        'Missing Date',
        'Make sure to enter a valid<br>' + 
        'Pick-Up Date and Drop-Off Date',
        'question'
      )
};

const dateExpiredAlert = () => {
    Swal.fire(
        'Invalid Drop-Off Date',
        'Make sure to enter a valid<br>' + 
        'Drop-Off Date',
        'question'
      )
};

const dropoffDateValidation = (firstDate, secondDate) =>{
  firstDate = new Date(reformatDate(firstDate));
  secondDate = new Date(reformatDate(secondDate));
  if(firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) {
    return true;
  } else {return false;}
}; 

const reformatDate = (dateString) => {
    var dateParts = dateString.split("/"); var month = dateParts[0];
    var day = dateParts[1]; var year = dateParts[2];
    return year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2);
}