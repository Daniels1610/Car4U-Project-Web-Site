const contactForm = {};
const sendBtn = document.querySelector(".sendbtn");

const sendEmail = (data) => {
    const url = 'http://ec2-18-224-14-162.us-east-2.compute.amazonaws.com/contact';
    
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => {
            return response.json();
        })
        .then(res => {
            console.log(res);
        })
        .catch(error => console.log(error));
}

const successAlert = () => {
    sendBtn.addEventListener("click", () => {
        Swal.fire(
            'Message Sent',
            'Thank you for contacting us!',
            'success'
        );
    });
}

const main = () => {
    sendBtn.addEventListener("click", () => {
        contactForm.email = {"S" : `${$("#email").val()}`};
        contactForm.subject = {"S" : `${$("#subject").val()}`};
        contactForm.message = {"S" : `${$("#message").val()}`};
        sendEmail(contactForm);
        successAlert();
    });
}

main();
