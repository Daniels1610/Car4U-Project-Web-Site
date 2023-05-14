const searchBtn = document.querySelector(".search-btn");
const locationInput = document.getElementById("location");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const locationValue = locationInput.value;

    localStorage.setItem('location', locationValue);
    let timerInterval;
    Swal.fire({
        title: 'Searching Car',
        html: 'Looking for your perfect deal',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            window.location.href = "selection.html";
        }
        })
});