const searchBtn = document.querySelector(".search-btn");
const locationInput = document.getElementById("location");
const pickupInput = document.querySelector(".pickup-Date");
const dropoffInput = document.querySelector(".dropoff-Date");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const locationValue = locationInput.value;
    localStorage.setItem('location', locationValue);
    searchAlert();
});

const searchAlert = () => {
    let timerInterval;
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
            window.location.href = "selection";
        }
        })
};
