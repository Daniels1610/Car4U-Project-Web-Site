const contactForm = {};
const sendBtn = document.querySelector(".sendbtn");

const sendEmail = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: `${$("#email").val()}`,
      subject: `${$("#subject").val()}`,
      message: `${$("#message").val()}`,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://a9169svduc.execute-api.us-east-2.amazonaws.com/develop/contact/",
      requestOptions
    )
      .then((response) => {
        return response.text()
    })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
}

const successAlert = () => {
    Swal.fire(
        'Message Sent',
        'Thank you for contacting us!',
        'success'
    );
}

const main = () => {
    sendBtn.addEventListener("click", () => {
        sendEmail();
        successAlert();
    });
}

main();
