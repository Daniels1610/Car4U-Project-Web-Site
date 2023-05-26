const searchBtn = document.querySelector(".search-btn");
const locationInput = document.getElementById("location").value;
const pickupInput = document.querySelector(".pickup-Date").value;
const dropoffInput = document.querySelector(".dropoff-Date").value;
let timerInterval;

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!pickupInput | !dropoffInput) {
        dateAlert();
        return;
    }
    localStorage.setItem('location', locationInput);
    localStorage.setItem('pickupDate', pickupInput);
    localStorage.setItem('dropOff', dropoffInput);
    searchAlert();
});

const searchAlert = () => {
    Swal.fire({
        title: 'Searching Car',
        html: 'Looking for your perfect deal',
        timer: 2000,
        timerProgressBar: true,
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
